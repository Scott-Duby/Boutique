import Chart from "@/components/Charts/Chart";
import { createFileRoute } from "@tanstack/react-router";
// Removed incomplete import

export const Route = createFileRoute('/data')({
  component: Chart,
});

export const HOST: string = import.meta.env.VITE_API_HOST;

    