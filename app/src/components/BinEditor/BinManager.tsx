import { Badge } from "@/components/@shadcn/ui/badge";
import { Button } from "@/components/@shadcn/ui/button";
import { useDeleteBin } from "@/Hooks/Mutations/Bins/useDeleteBin";
import { Plus } from "lucide-react"; // Import the Plus icon from Lucide
import { CreateBin } from "@/components/BinEditor/CreateBin"; // Import the CreateBin component
import { useEffect, useState } from "react";
import { EditBin } from "@/components/BinEditor/EditBin";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";
import { Input } from "../@shadcn/ui/input";

  
 export function BinManager({ }) {
  const deleteBin = useDeleteBin();
  const activeBin = useBoutiqueStore((state) => state.activeBin);
  const setActiveBin = useBoutiqueStore((state) => state.setActiveBin);

  const [createBinOpen, setCreateBinOpen] = useState(false);
  const [editBinOpen, setEditBinOpen] = useState(false);

  const bins = useBoutiqueStore((state) => state.bins)

  const [filteredBins, setFilteredBins] = useState(bins);

  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Get Event Handler
    const searchTerm = e.target ? (e.target as HTMLInputElement).value : ''; // Get value or set to ""
    setSearchQuery(searchTerm) // Set the search query for filter function
      
    const filteredItems = bins.filter((bin) => // Filter 
      bin.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
      setFilteredBins(filteredItems); // set filter items
  }

  useEffect(() => {
    setFilteredBins(bins);
  }, [bins]);

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col flex-grow overflow-hidden min-w-[1280px] h-full">
        <h1
          className="text-center"
          style={{ fontSize: "28px" }}
        >
          Bin Management
        </h1>
        <div className="flex-1 mt-6 overflow-y-auto">
          <div className="col-span-5 m-0 w-full">
              <Input className="" placeholder="Search Bins..." onChange={handleInputChange} value={searchQuery}/>
            </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 p-4">
            {/* Add New Bin Box */}
            <Button 
              className="min-h-full min-w-full cursor-pointer col-span-1"
              onClick={() => setCreateBinOpen(true)}
            >
              <Plus size={100}/>
            </Button>
            {filteredBins.length < 1 ? (
              <h1 className="col-span-5 flex items-center justify-center text-lg font-semibold">
                No Items
              </h1>
            ) : (
              filteredBins.map((bin) => (
                <div
                  key={bin.id}
                  className="shadow-md rounded-lg p-4 flex flex-col items-center justify-between"
                >
                  <h2 className="text-lg font-bold text-accent-foreground">{bin.name}</h2>
                  <Badge className="text-sm mt-2 bg-muted-foreground">
                    {bin.items.length} items
                  </Badge>
                  {bin.is_full ? (
                    <Badge className="text-sm bg-destructive mt-2">
                      Full
                    </Badge>
                  ) : (
                    <Badge className="text-sm mt-2 bg-green-500">
                      Available
                    </Badge>
                  )}
                  <div className="flex space-x-2 mt-4">
                    <Button
                      className="relative overflow-hidden font-bold py-2 px-4 rounded shadow-lg group bg-muted"
                      onClick={() => {
                        setActiveBin(bin);
                        setEditBinOpen(true);
                      }}
                    >
                      <span className="relative z-10">Edit</span>
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 bg-[repeating-linear-gradient(-45deg,_#facc15_0px,_#facc15_10px,_#f97316_10px,_#f97316_20px)] group-hover:animate-stripes"></span>
                    </Button>
                    <Button
                      className="relative overflow-hidden font-bold py-2 px-4 rounded shadow-lg hover:bg-destructive"
                      onClick={() => {
                        deleteBin.mutate(bin);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            )}
            </div>
          {activeBin ? (
            <EditBin open={editBinOpen} onOpenChange={setEditBinOpen} />
          ) : null}
          <CreateBin open={createBinOpen} onOpenChange={setCreateBinOpen}/>
        </div>
      </div>
    </div>
)};
