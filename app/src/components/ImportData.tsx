import { FC, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/@shadcn/ui/input";
import { Checkbox } from "@/components/@shadcn/ui/checkbox";
import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";
import { Badge, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./@shadcn/ui/dropdown-menu";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";

interface ImportFormProps {
}

interface IListing {
  name: string
  brand: string
  size: string
  isSold: boolean
  isNWT: boolean
  web_url: string
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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex items-end gap-4"
      >
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) => (!value ? "Username is required" : undefined),
          }}
          children={(field) => (
            <div className="flex flex-col">
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
              />
              <label htmlFor="unsoldOnly">Unsold only?</label>
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          )}
        />
      </form>
{listings.length > 0 ? (
  listings.map((item, index) => (
    <div key={index} className="flex space-x-4 items-center p-4 shadow-xl rounded-md">
      {/* Item Name */}
      <div>
        <label className="text-sm font-medium">Item Name</label>
        <input
          type="text"
          value={item.name}
          placeholder="Enter item name"
          className="rounded p-2 w-full border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          readOnly
        />
      </div>
      <div>
        <label className="text-sm font-medium">Web URL</label>
        <input
          type="text"
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
            Select a Bin
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {bins.map((bin) => (
              <DropdownMenuItem
                key={bin.id}
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
      />
    </div>
  ))
) : (
  <div>No Data</div>
)}
    </div> 
  );
  
};

export default ImportData;
