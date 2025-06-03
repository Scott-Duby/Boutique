import { FC, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/@shadcn/ui/input";
import { Checkbox } from "@/components/@shadcn/ui/checkbox";
import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";

interface ImportFormProps {
}

interface IListing {
  name: string
  brand: string
  size: string
  isSold: boolean
  isNWT: boolean
}

const ImportData: FC<ImportFormProps> = ({  }) => {
  const scrapeData = useScrapedData();
  const [listings, setListings] = useState<IListing[]>([])
  const form = useForm({
    defaultValues: {
      username: "",
      unsoldOnly: true,
    },
    onSubmit: async ({ value }) => {
      setListings([])
      const req = await scrapeData.mutateAsync(value);
      return setListings(req)
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex items-end gap-4"
      >
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) => (!value ? "Username is required" : undefined),
          }}
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Username</label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
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
              />
              <label htmlFor="unsoldOnly">Unsold only?</label>
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          )}
        />
      </form>
      {listings.length > 0 ? (
        <div>
          {listings.map((listing, idx) => (
            <div key={idx} className="flex flex-row justify-around bg-muted border-2 rounded-md p-2 m-2">
              Name: {listing.name} {" "}
              Brand: {listing.brand} {" "}
              NWT: {listing.isNWT ? "Yes" : "No"} {" "}
              Size: {listing.size } {" "}
              Sold: {listing.isSold ? "Yes": "No"}
            </div>
          ))}
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div> 
  );
  
};

export default ImportData;
