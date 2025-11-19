import { Item } from "@/types/Item";
import { Bin } from "@/types/Bin"; // Import Bin type
import { create } from "zustand";
import { Table } from "@tanstack/react-table";
import { TClientSettings } from "@/types/Settings";

export type TBoutiqueStore = {
clientSettings: TClientSettings;
setClientSettings: (clientSettings: TClientSettings) => void;

bins: Bin[];
activeBin: Bin | null;

setBins: (bins: Bin[]) => void,
setActiveBin: (bin: Bin) => void;
clearActiveBin: () => void;
addBin: (bin: Bin) => void;
removeBin: (id: number) => void;
updateBin: (updatedBin: Bin) => void;
clearBins: () => void;


items: Item[];

setItems: (items: Item[]) => void
addItem: (item: Item) => void;
removeItem: (itemId: number) => void;
clearItems: () => void;
updateItem: (updatedItem: Item) => void;


table: Table<Item> | null;
setTable: (table:Table<Item>) => void
createRows: (newRows: Item[]) => void;
updateData: (rowIndex: number, columnId: keyof Item, value: any) => void;
deleteData: (rowIndex: number) => void;
updateBinName: (rowIndex: number, value: Bin | null) => void;
}

export const useBoutiqueStore = create<TBoutiqueStore>((set, get) => ({
  // Bin Functions
  bins: [],
  activeBin: null,
  setBins: (bins: Bin[]) => set({bins}),
  setActiveBin: (bin: Bin) => set({ activeBin: bin }),
  clearActiveBin: () => set({ activeBin: null }),
  addBin: (bin: Bin) => set((state) => ({ bins: [...state.bins, bin] })),
  removeBin: (id: number) =>
    set((state) => ({
      bins: state.bins.filter((bin) => bin.id !== id),
    })),
  updateBin: (updatedBin: Bin) =>
    set((state) => ({
      bins: state.bins.map((bin) =>
        bin.id === updatedBin.id ? updatedBin : bin
      ),
    })),
  clearBins: () => set({ bins: [] }),

  // Item Functions
  items: [],
  setItems: (items: Item[]) => set({ items }),
  addItem: (item: Item) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })
  ),
  clearItems: () => set({ items: [] }),
  updateItem: (updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      ),
    })),

  
  table: null,
  setTable: (table) => {
     set({ table }) 
  },
  // --- Meta functions ---
  createRows: (newRows) => {
    newRows.forEach((row) => {
      get().addItem(row);
    });
  },

  updateData: (rowIndex, columnId, value) => {
    const items = get().items;
    const item = items[rowIndex];
    if (!item) {
      console.error(`No item at row ${rowIndex}`);
      return;
    }

    const updated = { ...item, [columnId]: value };
    get().updateItem(updated);
  },

  deleteData: (rowIndex) => {
    const items = get().items;
    const item = items[rowIndex];
    if (!item) {
      console.error(`No item at row ${rowIndex}`);
      return;
    }
    get().removeItem(item.id);
  },

  updateBinName: (rowIndex, binValue) => {
    const items = get().items;
    const item = items[rowIndex];
    if (!item) {
      console.error(`No item at row ${rowIndex}`);
      return;
    }

    const updated = {
      ...item,
      bin: binValue ?? null,
      binId: binValue ? binValue.id : 0, // Use 0 or another default number if binValue is null
    };

    get().updateItem(updated);
  },
  
  clientSettings: { poshmark_username: "", boutique_name: "", show_rows: 8 },
  setClientSettings: (clientSettings) => set({ clientSettings })
  
}));