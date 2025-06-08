import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { Item } from "@/types/Item";
import { Row, Column } from "@tanstack/react-table";
import { HOST } from "@/Routes/index";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";


export const useUpdateSold = (
  row: Row<Item>,
  setOpen: (value: boolean) => void,
  form: any,
  column: Column<Item>
) => {
  const updateData = useBoutiqueStore((state) => state.updateData); 

  return useMutation({
    mutationKey: ["updateSold"],
    mutationFn: (sold: boolean) => {
      const id = row.original.id;

      setOpen(false);

      return axios.patch(`http://${HOST}/v1/items/update/${id}`, {
        updates: [
          { field: "sold", value: sold ?? false }
        ]
      });
    },
    onSuccess: () => {
      updateData(row.index, column.id as keyof Item, form.getFieldValue("sold"));
      toast.success("Item sold updated successfully");
    },
    onError: (error) => {
      toast.error("Error updating item sold state: " + error.message);
    },
  });
};