import React from "react";
import ItemTable from "../components/ItemTable/ItemTable";
import { Heart } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/')({
  component: Index,
});

export const HOST = await window.electronAPI.settings.getConnectionString();

function Index() {
  return (
    <div className="flex flex-col items-center bg-background p-4">
      <div className="w-full h-full p-4 bg-popover shadow-2xl rounded-lg">
        <ItemTable />
      </div>
      <div className="flex flex-col align-middle items-center justify-center mt-8 py-8">
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