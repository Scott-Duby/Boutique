import ImportData from "../components/PoshmarkImport/ImportData";
import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/import')({
  component: Import,
});

function Import() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-background">
        <div className="w-full flex justify-center mb-8">
            <ImportData />
        </div>
    </div>
  );
}