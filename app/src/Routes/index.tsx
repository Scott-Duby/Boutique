import ItemTable from "../components/ItemTable/ItemTable";
import { Heart } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/')({
  component: Index,
});

export const HOST: string = import.meta.env.VITE_API_HOST;

function Index() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-background justify-center">
        <div className="w-full max-w-[1400px] max-h-[600px] p-4 bg-popover shadow-2xl rounded-lg">
          <ItemTable />
        </div>
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