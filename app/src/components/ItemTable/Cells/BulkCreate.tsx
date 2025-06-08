import * as React from "react";
import { useForm } from "@tanstack/react-form";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/@shadcn/ui/dropdown-menu"; // Import shadcn dropdown components
import { Table } from "@tanstack/react-table";
import { Item } from "@/types/Item";
import { Button } from "../../@shadcn/ui/button";
import { useBulkCreate } from "@/Hooks/Mutations/Items/useBulkCreate";
import { X } from "lucide-react";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { Badge } from "@/components/@shadcn/ui/badge";

/**
 * Props for the BulkCreate component.
 */
interface IBulkProps {
  /**
   * The TanStack Table instance.
   */
  table: Table<Item>
  /**
   * State setter function to control the visibility of the component.
   */
  setState : React.Dispatch<React.SetStateAction<boolean>>
}

declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    createRows: (values: unknown) => void;
  }
}

/**
 * BulkCreate component for creating multiple items at once.
 *
 * This component provides a form for entering item details (name, bin, sold status)
 * and allows adding/removing items dynamically. It uses TanStack Form for form
 * management, TanStack Query for data mutation, and Shadcn UI components for
 * styling.
 *
 * @param props - The component props.
 * @returns A JSX element representing the bulk create form.
 */
const BulkCreate: React.FunctionComponent<IBulkProps> = ({ table, setState }) => {
  const createBulk = useBulkCreate(setState); // Custom hook for bulk creation
  // Initialize the form
  const form = useForm({
    defaultValues: {
      items: [{ name: "", binId: null, sold: false, web_url: "https://poshmark.com" }], // Default structure for items
    },
    onSubmit: async (values) => {
      // Send the data to the server
      await createBulk.mutate({values})
    }
  });

  const bins = useBoutiqueStore((state) => state.bins);

  const [items, setItems] = React.useState([{ name: "", binId: null, sold: false, web_url: "https://poshmark.com" }]); // State to manage items

  // Handle adding a new item
  const addItem = () => {
    setItems([...items, { name: "", binId: null, sold: false, web_url: "https://poshmark.com" }]);
  };

  // Handle removing an item
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Handle updating an item
  const updateItem = (index: number, field: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  return (
    <div className="p-4 flex flex-col align-middle">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.setFieldValue("items", items); // Update form values with the items array
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        {items.map((item, index) => (
          <div key={index} className="flex space-x-4 items-center p-4 shadow-xl rounded-md">
            {/* Item Name */}
            <div>
              <label className="text-sm font-medium  -foreground">Item Name</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(index, "name", e.target.value)}
                placeholder="Enter item name"
                className="rounded p-2 w-full   border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium  -foreground">Web URL</label>
              <input
                type="text"
                value={item.web_url}
                onChange={(e) => updateItem(index, "web_url", e.target.value)}
                placeholder="Enter web URL"
                className="rounded p-2 w-full   border-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
  
            {/* Bin Dropdown */}
            <div>
              <label className="block text-sm font-medium">Bin</label>
              <DropdownMenu>
                <DropdownMenuTrigger 
                className="border-2 focus:outline-none focus:ring-2 rounded p-2 w-full text-left">
                  {item.binId
                    ? bins.find((bin) => bin.id === item.binId)?.name || "Select a Bin"
                    : "Select a Bin"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  {bins.map((bin) => (
                    <DropdownMenuItem
                      key={bin.id}
                      onClick={() => updateItem(index, "binId", bin.id)}
                      className=""
                    >
                      {bin.name} {bin.is_full && (<Badge className="red-800">full</Badge>)}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem onClick={() => updateItem(index, "binId", null)}>
                    No Bin
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
  
            {/* Sold Dropdown */}
            <div>
              <label className="block text-sm font-medium   ">Sold</label>
              <select
                value={item.sold ? "yes" : "no"}
                onChange={(e) => updateItem(index, "sold", e.target.value === "yes")}
                className=" rounded border-b-card-foreground border-2 p-2 w-full"
                style={{
                  width: "100px", // Make the dropdown larger
                  height: "40px", // Increase height
                  padding: "8px", // Add padding
                  borderRadius: "0.375rem", // Rounded corners
                }}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            
              {/* Remove Button */}

            </div>
            <X
                onClick={() => removeItem(index) }
                className="text-destructive cursor-pointer hover:text-red-400 mt-4"
                scale={50}
                fill="#f14444"
               />
          </div>
  

        ))}
  
        {/* Add Item Button */}
        <Button
          type="button"
          onClick={addItem}
          style={{
            padding: "8px 16px", // Tailwind's px-4 py-2
            borderRadius: "0.375rem", // Tailwind's rounded
            marginRight: "5px",
          }}
          className="hover:shadow-lg shadow-md  input"
        >
          Add Item
        </Button>
  
        {/* Submit Button */}
        <Button
          type="submit"
          className=" green-500 hover: green-400 "
          style={{
            color: "white", // Tailwind's text-white
            padding: "8px 16px", // Tailwind's px-4 py-2
            borderRadius: "0.375rem", // Tailwind's rounded
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BulkCreate;