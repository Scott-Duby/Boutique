import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/settings')({
  component: Settings,
});


export interface ISettingProps {
}

export function Settings ({ }: ISettingProps) {
  return (
    <div>   
        Hello World
    </div>
  );
}


export const HOST: string = import.meta.env.VITE_API_HOST;

    