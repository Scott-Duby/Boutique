import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { HOST } from "@/Routes/index";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { Item } from "@/types/Item";
import { Row } from "@tanstack/react-table";


/**
 * Custom hook to handle updating the name of an item.
 *
 * This hook uses the `useMutation` hook from `@tanstack/react-query` to perform
 * an update operation on an item's name. It also provides success and error handling
 * with toast notifications.
 *
 * @param row - The row object containing the item to be updated.
 * @param table - The table instance, used to update the table state after the name is updated.
 * @param column - The column instance, used to identify the column being updated.
 * @param form - The form instance, used to retrieve the updated name value.
 * @param setOpen - A function to control the open state of the update confirmation dialog.
 * @returns A mutation object from `useMutation` for handling the update operation.
 */

export const useUpdateItemName = (
  row: Row<Item>,
  setOpen: (value: boolean) => void
) => {
  const updateData = useBoutiqueStore((state) => state.updateData); // ✅ pull the update function

  return useMutation({
    mutationFn: ({ name, url }: { name: string; url: string }) => {
      const id = row.original.id;
      setOpen(false);
      return axios.patch(`http://${HOST}/v1/items/update/${id}`, {
        updates: [
          { field: "name", value: name },
          { field: "web_url", value: url },
        ],
      });
    },
    onSuccess: ({ data }) => {
      updateData(row.index, "name", data.items.name); 
      updateData(row.index, "web_url", data.items.web_url);
      toast.success(`Item updated successfully`);
    },
    onError: (error: any) => {
      toast.error("Error updating item name: " + error.message);
    },
  });
};