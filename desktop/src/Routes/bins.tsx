import { createFileRoute } from "@tanstack/react-router";
import { BinManager } from "../components/BinEditor/BinManager";

export const Route = createFileRoute('/bins')({
  component: BinManager,
});


    