import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import ItemTable from "../components/ItemTable/ItemTable";
import TableSkeleton from "../components/ItemTable/TableSkeleton";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";
import { useBoutiqueStore } from "../Hooks/Store/UseBoutiqueStore";
import { Heart } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/')({
  component: Index,
});

export const HOST: string = import.meta.env.VITE_API_HOST;

function Index() {
  // Move hook logic outside of return
  const results = useQueries({
    queries: [
      {
        queryKey: ["getItems"],
        queryFn: async () => {
          const { data } = await axios.get(`http://${HOST}/v1/items`);
          if (!data.items) {
            throw new Error("Invalid response structure from /v1/items");
          }
          return data.items;
        },
      },
      {
        queryKey: ["getBins"],
        queryFn: async () => {
          const { data } = await axios.get(`http://${HOST}/v1/bins`);
          return data.data;
        },
      },
    ],
  });

  // Load State
  const setBins = useBoutiqueStore((state) => state.setBins);
  const setItems = useBoutiqueStore((state) => state.setItems);

  // Set Query Data
  const getItems = results[0];
  const getBins = results[1];

  useEffect(() => {
    if (getItems.isError && getItems.error) {
      toast.error(
        `Error fetching items: ${
          (getItems.error as Error).message || "Something went wrong"
        }`,
      );
    }
  }, [getItems.isError, getItems.error]);
  useEffect(() => {
    if (getBins.isError && getBins.error) {
      toast.error(
        `Error fetching bins: ${
          (getBins.error as Error).message || "Something went wrong"
        }`,
      );
    }
  }, [getBins.isError, getBins.error]);

  useEffect(() => {
    if (getBins.data) {
      setBins(getBins.data);
    }
  }, [getBins.data]);
  useEffect(() => {
    if (getItems.data) {
      setItems(getItems.data);
    }
  }, [getItems.data]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-background justify-center">
      {getItems.isLoading || getBins.isLoading ? (
        <TableSkeleton />
      ) : getItems.isError || getBins.isError ? (
        <div className="text-destructive">
          Failed to load data. Please try again later.
        </div>
      ) : (
        <div className="w-full max-w-[1400px] max-h-[600px] p-4 bg-popover shadow-2xl rounded-lg">
          <ItemTable />
        </div>
      )}

      <div className="flex flex-col align-middle items-center justify-center mt-8">
        <footer className="relative text-sm mt-4">
          Made with{" "}
          <Heart
            className="inline mb-1"
            strokeWidth={2}
            color="#f21818"
            size={18}
          />{" "}
          for Sarah 2025
        </footer>
      </div>
    </div>
  );
}