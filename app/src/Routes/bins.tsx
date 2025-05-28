import { createFileRoute } from "@tanstack/react-router";
import { BinManager } from "@/components/BinEditor/BinManager";
// Removed incomplete import

export const Route = createFileRoute('/bins')({
  component: BinManager,
});

export const HOST: string = import.meta.env.VITE_API_HOST;

    