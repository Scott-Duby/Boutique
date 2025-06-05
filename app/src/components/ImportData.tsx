import { FC, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/@shadcn/ui/input";
import { Checkbox } from "@/components/@shadcn/ui/checkbox";
import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";
import { Badge, FrownIcon, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./@shadcn/ui/dropdown-menu";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { Popover, PopoverContent } from "./@shadcn/ui/popover";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

interface ImportFormProps {
}

interface IListing {
  name: string
  brand: string
  size: string
  isSold: boolean
  isNWT: boolean
  web_url: string
  bin_id:  number | null
}

const ImportData: FC<ImportFormProps> = ({  }) => {
  const bins = useBoutiqueStore((state) => state.bins)
  const scrapeData = useScrapedData();
  const [listings, setListings] = useState<IListing[]>([])
  const form = useForm({
    defaultValues: {
      username: "",
      unsoldOnly: true,
    },
    onSubmit: async ({ value }) => {
      setListings([])
      const req = await scrapeData.mutateAsync(value);
      return setListings(req)
    },
  });
  console.log(listings)
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
    <div className="p-5 h-screen w-screen ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
          <div className=" border-accent border-2 flex flex-row items-end gap-4 p-4 justify-between">
            <form.Field
            name="username"
            validators={{
              onChange: ({ value }) => (!value ? "Username is required" : undefined),
            }}
            children={(field) => (
              <div className="flex flex-col w-full">
                <label htmlFor={field.name}>Username</label>
                <Input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          />
          <form.Field
            name="unsoldOnly"
            children={(field) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={field.state.value}
                  onCheckedChange={(v: any) => field.handleChange(Boolean(v))}
                  className="w-8 h-8"
                />
                <label htmlFor="unsoldOnly">Unsold only?</label>
              </div>
            )}
          />
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <div>
                <button
                type="submit"
                disabled={!canSubmit}
                className="bg-primary text-white px-4 py-2 rounded w-2xl"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
               
              </div>
            )}
          />
        </div>
      </form>
{listings.length > 0 && (
  listings.map((item, index) => (
    <div key={index} className="flex space-x-4 items-center p-4 shadow-xl rounded-md bg-background m-2">
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
      <div>
        <label className="text-sm font-medium">Web URL</label>
        <input
          type="text"
          onChange={(e) => updateListing(index, "web_url", e.target.value)}
          placeholder={item.web_url}
          className="rounded p-2 w-full border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          value={item.web_url}
        />
      </div>

      {/* Bin Dropdown */}
      <div>
        <label className="block text-sm font-medium">Bin</label>
        <DropdownMenu>
          <DropdownMenuTrigger 
            className="border-2 focus:outline-none focus:ring-2 rounded p-2 w-full text-left">
            {item.bin_id
              ? bins.find((bin) => bin.id === item.bin_id)?.name || "Select a Bin"
              : "Select a Bin"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {bins.map((bin) => (
              <DropdownMenuItem
                key={bin.id}
                onClick={() => updateListing(index, "bin_id", bin.id)}
              >
                {bin.name} {bin.is_full && (<Badge className="red-800">full</Badge>)}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
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
          onChange={(e) => updateListing(index, "isSold", e.target.value === "yes")}
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
  ))
)}
  {form.state.isSubmitting ? 
    <div className="flex flex-col h-screen w-screen">
      <div className=" rounded-lg p-8 flex flex-col items-center gap-4 shadow-lg">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary" />
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    </div>
    : <div />}
    {listings.length < 1 && form.state.isSubmitSuccessful && (<div className="flex flex-row gap-2 justify-center mt-5 text-5xl text-destructive underline">No Data Found On This User <FrownIcon size={60}  className=""/></div>)}
    </div> 
  );
  
};

export default ImportData;
