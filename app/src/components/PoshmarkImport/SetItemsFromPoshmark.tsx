import React, { FC, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@shadcn/ui/dropdown-menu";
import { X } from "lucide-react";
import { Button } from "../@shadcn/ui/button";
import { TListing } from "@/types/Listings";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { useForm } from "@tanstack/react-form";
import { useBulkCreate } from "@/Hooks/Mutations/Items/useBulkCreate";
import { Input } from "../@shadcn/ui/input";
import { Badge } from "@/components/@shadcn/ui/badge";
import ImportPaginator from "./ImportPaginator";
import shortid from "shortid";

interface ISetItemsFromPoshmark {
  listings: TListing[];
  setListings: React.Dispatch<React.SetStateAction<TListing[]>>;
}

const SetItemsFromPoshmark: FC<ISetItemsFromPoshmark> = ({
  listings,
  setListings,
}) => {
  const bins = useBoutiqueStore((state) => state.bins);
  const createBulk = useBulkCreate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredListings, setFilteredListings] = useState<TListing[]>(listings);

  // Search on all listings
  useEffect(() => {
    const filtered = listings.filter((listing) =>
      listing.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setFilteredListings(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery, listings]);

  const reset = () => setListings([])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const form = useForm({
    defaultValues: [...listings],
    onSubmit: async () => {
      const sentArray = listings.map((value) => ({
        name: value.name,
        sold: value.isSold,
        binId: value.bin_id ?? 0,
        web_url: value.web_url,
      }));
      return await createBulk.mutate({
        values: { value: { items: sentArray } },
      });
    },
  });

  const updateListing = (item: TListing, field: keyof TListing, value: any) => {
    const updated = listings.map((l) =>
      l === item ? { ...l, [field]: value } : l
    );
    setListings(updated);
  };

  const removeItem = (item: TListing) => {
    const updated = listings.filter((l) => l !== item);
    setListings(updated);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col mt-5">
        <div className="flex flex-row">
            <Button type="submit" className="m-2 h-15 hover:cursor-pointer flex-2/3 bg-background border-accent border-2">
            Add Items To Inventory
          </Button>
          <Button onClick={reset} className="h-15 m-2 flex-1/16 bg-background border-accent border-2" type="button">Reset</Button>
          <Input className="h-15 m-2 flex-1/3 bg-background border-accent border-2 hover:bg-destructive" onChange={handleInputChange} value={searchQuery} placeholder="Search Items" />
        </div>
        
        {currentListings.length < 1 ? <div className="text-center flex flex-col border-2 p-6 border-accent"><h1 className="text-3xl underline">No Items Found</h1> Try refining your search</div> : ""}
        {currentListings.map((item) => {
          return (
            <div
              key={shortid.generate()}
              className="flex space-x-4 items-center p-4 shadow-xl rounded-md bg-background m-2"
            >
              {/* Item Name */}
              <div className="flex-2/3">
                <label className="text-sm font-medium">Item Name</label>
                <input
                  type="text"
                  value={item.name}
                  placeholder="Enter item name"
                  className="rounded p-2 w-full border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                  onChange={(e) =>
                    updateListing(item, "name", e.target.value)
                  }
                />
              </div>

              {/* Web URL */}
              <div>
                <label className="text-sm font-medium">Web URL</label>
                <Input
                  type="text"
                  value={item.web_url}
                  onChange={(e) =>
                    updateListing(item, "web_url", e.target.value)
                  }
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
                        onClick={() =>
                          updateListing(item, "bin_id", bin.id)
                        }
                      >
                        {bin.name}
                        {bin.is_full && <Badge className="red-800">full</Badge>}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem
                      onClick={() => updateListing(item, "bin_id", null)}
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
                    updateListing(item, "isSold", e.target.value === "yes")
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
                onClick={() => removeItem(item)}
              />
            </div>
          );
        })}

        {/* Pagination Controls */}
        <ImportPaginator currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />

      </div>
    </form>
  );
};

export default SetItemsFromPoshmark;
