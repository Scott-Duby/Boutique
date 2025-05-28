import * as React from "react";
import { Input } from "../@shadcn/ui/input";
import { Checkbox } from "../@shadcn/ui/checkbox";
import { Label } from "../@shadcn/ui/label";
import { Funnel } from "lucide-react";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { Bin } from "@/types/Bin";
import { Button } from "../@shadcn/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "../@shadcn/ui/dropdown-menu";
/**
 * Props for the Filters component.
 */
export interface IFiltersProps {
  /**
   * The current column filters.
   */
  columnFilters: {
    id: string;
    value: string | string[] | { id: number; name: string }[];
  }[];
  /**
   * A function to update the column filters.
   */
  setColumnFilters: React.Dispatch<React.SetStateAction<({
    id: string;
    value: string | Bin[];
  })[]>>
  /**
   * The list of available bins.
   */
  bins: { id: number; name: string }[] | {id: number; name: string}; // List of bins
}
/**
 * Filters component for filtering items by name and bin.
 *
 * This component provides a text input for searching items by name and a
 * popover with checkboxes for filtering items by bin.
 *
 * @param props - The component props.
 * @returns A JSX element representing the filters.
 */
export function Filters({ columnFilters, setColumnFilters }: IFiltersProps) {
  const bins = useBoutiqueStore((state) => state.bins)
  const name = (columnFilters.find((f) => f.id === "name")?.value as string) || "";
  const selectedBins = (
    columnFilters.find((f) => 
      f.id === "bin_name")?.value as unknown as { 
        id: number; 
        name: string 
    } []) || [];

  /**
   * Updates the column filters with the given ID and value.
   *
   * @param id - The ID of the filter to update.
   * @param value - The new value for the filter.
   */
  const onFilterChange = (id: string, value: string | { id: number; name: string }[]) => {
    setColumnFilters((prev) => {
      const updatedFilters = prev.filter((f) => f.id !== id);
  
      if (id === "bin_name") {
        updatedFilters.push({
          id,
          value: value as Bin[],
        });
      } else {
        updatedFilters.push({
          id,
          value: value as string,
        });
      }
  
      return updatedFilters;
    });
  };
  /**
   * Toggles the selection of a bin by its object.
   *
   * If the bin is currently selected, it will be deselected.
   * If the bin is currently deselected, it will be selected.
   *
   * @param bin - The bin object to toggle.
   */
  const toggleBinSelection = (bin: Bin) => {
    const updatedBins = selectedBins.some((selectedBin) => selectedBin.id === bin.id)
      ? selectedBins.filter((selectedBin) => selectedBin.id !== bin.id)
      : [...selectedBins, { ...bin, is_full: false, items: [] }];
    onFilterChange("bin_name", updatedBins);
  };

  return (
    <div className="flex items-center space-x-4 p-4 rounded-md">
      <Input
        type="text"
        placeholder="Search items..."
        value={name}
        onChange={(e) => onFilterChange("name", e.target.value)}
        className="flex-grow bg-primary shadow-md placeholder:text-foreground"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Funnel className="cursor-pointer text-primary hover:text-accent" fill="#f14444" size={30} strokeWidth={1.5} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 w-64 opacity-90">
          <div className="flex flex-col space-y-1 m-4">
            {Array.isArray(bins) && bins.map((bin) => (
              <div key={bin.id} className="flex items-center space-x-2 m-2 border-b-ring  border-b-2">
                <Checkbox
                  className="cursor-pointer w-5 h-5 bg-foreground mb-1"
                  checked={selectedBins.some((selectedBin) => selectedBin.id === bin.id)}
                  onCheckedChange={() => toggleBinSelection(bin)}
                  id={`bin-${bin.id}`}
                />
                <Label htmlFor={`bin-${bin.id}`}>{bin.name}</Label>
              </div>
            ))}
            <Button
              className="bg-destructive cursor-pointer hover:opacity-80"
              onClick={() => {
                setColumnFilters((prev) => prev.filter((filter) => filter.id !== "bin_name")); // Remove only the bin_name filter
              }}
            >
              Clear Bins
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}