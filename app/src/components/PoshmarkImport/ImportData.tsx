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
  const form = useForm({
    defaultValues: {
      username: "",
      unsoldOnly: true,
    },
    onSubmit: async ({ value }) => {
      setListings([]);
      const req = await scrapeData.mutateAsync(value);
      return setListings(req);
    },
  });
  // Handle removing an item

  return (
    <div className="p-5 h-screen w-screen ">
      <GetItemsFromPoshmark setListings={setListings} />
      {listings.length > 0 && (
        <SetItemsFromPoshmark listings={listings} setListings={setListings} />
      )}
      {form.state.isSubmitting ? (
        <div className="flex flex-col h-screen w-screen">
          <div className=" rounded-lg p-8 flex flex-col items-center gap-4 shadow-lg">
            <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary" />
            <span className="text-lg font-semibold">Loading...</span>
          </div>
        </div>
      ) : (
        <div />
      )}
      {listings.length < 1 && form.state.isSubmitSuccessful && (
        <div className="flex flex-row gap-2 justify-center mt-5 text-5xl text-destructive underline">
          No Data Found On This User <FrownIcon size={60} className="" />
        </div>
      )}
    </div>
  );
};

export default ImportData;
