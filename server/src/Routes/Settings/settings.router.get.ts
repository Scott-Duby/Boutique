import { getSettings } from "../../Controllers/settings.controller";
import SettingsRouter from "./settings.router";

SettingsRouter.get("/", async (_, res) => {
    let settings = await getSettings();
    res.status(200).json({ message: "success", data: settings})
})
