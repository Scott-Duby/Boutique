import { Settings } from "@/components/Settings/Settings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/settings')({
  component: Settings,
});



export const HOST: string = import.meta.env.VITE_API_HOST;

    