import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { HOST } from "@/Routes/index";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";


export const useBulkCreate = (
    setOpen ?: (value: boolean) => void
) => {
  const createRows = useBoutiqueStore((state) => state.createRows)
  return useMutation({
    mutationKey: ["createBulkItems"],
    mutationFn: async (data: unknown) => {
      const response = await axios({
        url : `http://${HOST}/v1/items/bulk/create`,
        data: { data },
        method: "post"
      })
      if(setOpen) setOpen(false); // Close the modal after the request
      return response
    },
    onError: (error) => {
      
      return toast.error("Failed to create items: " + error)
    },
    onSuccess: ({data}) => {
      console.log(data.items)
      if (Array.isArray(data.items)) {
        createRows(data.items);
        toast.success("Items added successfully!");
      } else {
        console.error("Expected an array but received:", data.items);
      }
    },
})
}