import { Link } from "@tanstack/react-router";
import { ChartColumnBig, Shirt } from "lucide-react";
import { FC } from "react";

interface IProps {};

const Navbar:FC<IProps> = ({}) => {
    return ( 
        <div className=" p-8 flex flex-row justify-around text-2xl">
            <div className="flex flex-row start justify-start border-1">
                <h2>Boutique</h2>
                <Shirt className="mt-1 ml-1" />
            </div>
            <Link to="/" className="hover:text-accent">Home</Link>{" "}
            <Link to="/bins" className="hover:text-accent">Bins</Link> {" "}
            <Link to="/data" className="hover:text-accent"><div className="flex flex-start justify-between">Data <ChartColumnBig className="mt-1 ml-1"/></div></Link>{" "}

        </div>
    )
};

export default Navbar;