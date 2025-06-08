import { useScrapedData } from "@/Hooks/Mutations/useScrapedData";
import { TListing } from "@/types/Listings";
import { useForm } from "@tanstack/react-form";
import * as React from "react";
import { Input } from "../@shadcn/ui/input";
import { Checkbox } from "../@shadcn/ui/checkbox";

interface IGetItemsFromPoshmarkProps {
  setListings: React.Dispatch<React.SetStateAction<TListing[]>>;
}

const GetItemsFromPoshmark: React.FC<IGetItemsFromPoshmarkProps> = ({
  setListings,
}) => {
  const scrapedData = useScrapedData();

  const form = useForm({
    defaultValues: {
      username: "",
      unsoldOnly: true,
    },
    onSubmit: async ({ value }) => {
      setListings([]);
      const req = await scrapedData.mutateAsync(value);
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
      <div className=" border-accent border-2 flex flex-row items-end gap-4 p-4 justify-between">
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
    </form>
  );
};

export default GetItemsFromPoshmark;
