import { FC, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";
import { FrownIcon } from "lucide-react";
import { TListing } from "@/types/Listings";
import GetItemsFromPoshmark from "./GetItemsFromPoshMark";
import SetItemsFromPoshmark from "./SetItemsFromPoshmark";

interface ImportFormProps {}

const ImportData: FC<ImportFormProps> = ({}) => {
  const scrapeData = useScrapedData();
  const [listings, setListings] = useState<TListing[]>([]);
  
  // Handle removing an item

  return (
    <div className="p-5 h-screen w-screen ">
      <GetItemsFromPoshmark listings={listings} setListings={setListings} />
      {listings.length > 0 && (
        <SetItemsFromPoshmark listings={listings} setListings={setListings} />
      )}

    </div>
  );
};

export default ImportData;
