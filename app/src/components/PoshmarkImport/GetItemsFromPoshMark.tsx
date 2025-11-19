import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";
import { TListing } from "@/types/Listings";
import { useForm } from "@tanstack/react-form";
import * as React from "react";
import { Input } from "../@shadcn/ui/input";
import { Checkbox } from "../@shadcn/ui/checkbox";
import { FrownIcon } from "lucide-react";
import { useBoutiqueStore } from "@/Hooks/Store/UseBoutiqueStore";

interface IGetItemsFromPoshmarkProps {
  setListings: React.Dispatch<React.SetStateAction<TListing[]>>;
  listings: TListing[];
}

const GetItemsFromPoshmark: React.FC<IGetItemsFromPoshmarkProps> = ({
  setListings,
}) => {
  /* 
  dataDidReturn Controls a state variable that determines whether or not the query actually 
  returned data (No data means no user), this way I can display a proper error message, 
  This makes it viable to use a reset button to reset the query whithout that same error 
  message returning since the site DID return and the user knows the site returned data 
  */
  const [dataDidReturn, setDataDidReturn] = React.useState(false) 
  const settings = useBoutiqueStore((state) => state.clientSettings);
  const scrapedData = useScrapedData();
  const form = useForm({
    defaultValues: {
      username: settings.poshmark_username,
      unsoldOnly: true,
    },
    onSubmit: async ({ value }) => {
      setListings([]);
      const req = await scrapedData.mutateAsync(value);
      setDataDidReturn(req.length > 0);
      return setListings(req);
    },
  });


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      
      <div className=" border-accent shadow-2xl flex flex-row items-end gap-4 p-4 justify-between">
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) =>
              !value ? "Username is required" : undefined,
          }}
          children={(field) => (
            <div className="flex flex-col w-full">
              <label htmlFor={field.name}>Username</label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                defaultValue={settings.poshmark_username}
              />
            </div>
          )}
        />
        <form.Field
          name="unsoldOnly"
          children={(field) => (
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={field.state.value}
                onCheckedChange={(v: any) => field.handleChange(Boolean(v))}
                className="w-8 h-8"
              />
              <label htmlFor="unsoldOnly">Unsold only?</label>
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div>
              <button
                type="submit"
                disabled={!canSubmit}
                className="bg-primary text-white px-4 py-2 rounded w-2xl hover:cursor-pointer"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          )}
        />
      </div>
        {form.state.isSubmitting ? (
        <div className="flex flex-col h-screen w-screen">
          <div className=" rounded-lg p-8 flex flex-col items-center gap-4 shadow-lg">
            <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary" />
            <span className="text-lg font-semibold">Loading Items, this may take several minutes</span>
          </div>
        </div>
      ) : (
        <div />
      )}
      {form.state.isSubmitSuccessful && !dataDidReturn && (
        <div className="flex flex-row gap-2 justify-center mt-5 text-5xl text-destructive underline">
          No Data Found On This User <FrownIcon size={60} />
        </div>
      )}
    </form>
  );
};

export default GetItemsFromPoshmark;
