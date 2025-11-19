import React from "react";
import { Link } from "@tanstack/react-router";
import { ChartColumnBig, Cog, Import, Shirt } from "lucide-react";
import { FC } from "react";

interface IProps {}

const Navbar: FC<IProps> = ({}) => {
  return (
    <div className=" p-8 flex flex-row justify-between text-2xl">
      <div className="flex flex-row">
        <h2>Boutique</h2>
        <Shirt className="mt-1 ml-1" />
      </div>
      <Link to="/" className="hover:text-muted">
        Home
      </Link>{" "}
      <Link to="/bins" className="hover:text-muted">
        Bins
      </Link>{" "}
      <Link to="/data" className="hover:text-muted">
        <div className="flex flex-start justify-between">
          Data <ChartColumnBig className="mt-1 ml-1" />
        </div>
      </Link>{" "}
      <Link to="/settings" className="hover:text-muted flex flex-row">
        Settings
        <Cog scale={50} size={30} className="ml-1.5" />
      </Link>{" "}
      <Link
        to="/import"
        className="hover:text-muted flex flex-row border-1 bg-foreground text-background p-1 rounded-md"
      >
        Import Data
        <Import scale={50} size={30} className="ml-1.5" />
      </Link>{" "}
      {/* Todo: I want to make this a sidebar with the settings so it doesn't navigate to another page and re render I think it would also just look cleaner. */}
    </div>
  );
};

export default Navbar;
