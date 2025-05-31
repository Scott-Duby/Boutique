import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/settings')({
  component: Settings,
});


export interface ISettingProps {
}

export function Settings ({ }: ISettingProps) {
  return (
    <div className="flex align-middle justify-center">   
        <h1 className="text-4xl mt-6 p-2">Coming Soon!</h1>
    </div>
  );
}


export const HOST: string = import.meta.env.VITE_API_HOST;

    