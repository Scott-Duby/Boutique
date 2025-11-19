import { createFileRoute } from "@tanstack/react-router";
import { BinManager } from "../components/BinEditor/BinManager";
// Removed incomplete import

export const Route = createFileRoute('/bins')({
  component: BinManager,
});


    