import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@shadcn/ui/dropdown-menu";
import { Badge, X } from "lucide-react";
import { Button } from "../@shadcn/ui/button";
import { TListing } from "@/types/Listings";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { useForm } from "@tanstack/react-form";
import { useBulkCreate } from "@/Hooks/Mutations/Items/useBulkCreate";

interface ISetItemsFromPoshmark {
  listings: TListing[];
  setListings: React.Dispatch<React.SetStateAction<TListing[]>>;
}

const SetItemsFromPoshmark: FC<ISetItemsFromPoshmark> = ({
  listings,
  setListings,
}) => {
  const bins = useBoutiqueStore((state) => state.bins);
  const createBulk = useBulkCreate()

  const form = useForm({
    defaultValues: [...listings],
    onSubmit: async (values) => {
        let sentArray: Array<{
          name: string;
          sold: boolean;
          binId: number;
          web_url: string;
        }> = [];
        values.value.forEach(value => {
          sentArray.push({name: value.name, sold: value.isSold, binId: value.bin_id ?? 0, web_url: value.web_url})
        })
        return await createBulk.mutate({ values: {value: {items: sentArray} } }) // <-- Fucking weird Axios wtf

    }
  })


  // Handle removing an item
  const removeItem = (index: number) => {
    setListings(listings.filter((_, i) => i !== index));
  };

  // Handle updating an item
  const updateListing = (index: number, field: string, value: any) => {
    const updatedItems = [...listings];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setListings(updatedItems);
  };

  return (
    <form onSubmit={(e) => {e.preventDefault(); form.handleSubmit(); }}>
        <div>
        <Button type="submit">Submit Data</Button>
        {listings.map((item, index) => (
            <div
            key={index}
            className="flex space-x-4 items-center p-4 shadow-xl rounded-md bg-background m-2"
            >
            {/* Item Name */}
            <div>
                <label className="text-sm font-medium">Item Name</label>
                <input
                type="text"
                value={item.name}
                placeholder="Enter item name"
                className="rounded p-2 w-full border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                onChange={(e) => updateListing(index, "name", e.target.value)}
                />
            </div>
            {/* Web URL */}
            <div>
                <label className="text-sm font-medium">Web URL</label>
                <input
                type="text"
                value={item.web_url}
                onChange={(e) => updateListing(index, "web_url", e.target.value)}
                placeholder="Enter web URL"
                className="rounded p-2 w-full border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                />
            </div>
            {/* Bin Dropdown */}
            <div>
                <label className="block text-sm font-medium">Bin</label>
                <DropdownMenu>
                <DropdownMenuTrigger className="border-2 focus:outline-none focus:ring-2 rounded p-2 w-full text-left">
                    {item.bin_id
                    ? bins.find((bin) => bin.id === item.bin_id)?.name ||
                        "Select a Bin"
                    : "Select a Bin"}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {bins.map((bin) => (
                    <DropdownMenuItem
                        key={bin.id}
                        onClick={() => updateListing(index, "bin_id", bin.id)}
                    >
                        {bin.name}{" "}
                        {bin.is_full && <Badge className="red-800">full</Badge>}
                    </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem
                    onClick={() => updateListing(index, "bin_id", null)}
                    >
                    No Bin
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Sold Dropdown */}
            <div>
                <label className="block text-sm font-medium">Sold</label>
                <select
                value={item.isSold ? "yes" : "no"}
                onChange={(e) =>
                    updateListing(index, "isSold", e.target.value === "yes")
                }
                className="rounded border-b-card-foreground border-2 p-2 w-full"
                style={{
                    width: "100px",
                    height: "40px",
                    padding: "8px",
                    borderRadius: "0.375rem",
                }}
                >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>
            {/* Remove Button */}
            <X
                className="text-destructive cursor-pointer hover:text-red-400 mt-4"
                scale={50}
                fill="#f14444"
                onClick={() => removeItem(index)}
            />
            </div>
        ))}
        </div>
    </form>
  );
};

export default SetItemsFromPoshmark;
