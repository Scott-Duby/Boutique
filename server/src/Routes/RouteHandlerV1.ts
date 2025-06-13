import express from "express";

import BinsRouter from "./Bins/bins.router";
import "./Bins/bins.router.get"
import "./Bins/bins.router.patch"

import ItemsRouter from "./Items/items.router";
import "./Items/items.router.patch";
import "./Items/items.router.get"

import SettingsRouter from "./Settings/settings.router";
import "./Settings/settings.router.patch";
import "./Settings/settings.router.get";


const RouteHandler = express.Router();

/* 
    Basic Validation Mock:
        - Check Request Body and Validate
        - Send to Controller
        - Return Response in a JSON object 
            - Message, Response Code || Data
*/

RouteHandler.use("/bins", BinsRouter);
RouteHandler.use("/items", ItemsRouter);
RouteHandler.use("/client-settings", SettingsRouter)

export default RouteHandler;

