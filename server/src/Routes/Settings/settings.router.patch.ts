import { param, validationResult } from "express-validator";
import SettingsRouter from "./settings.router";
import { updateUsername } from "../../Controllers/settings.controller";

SettingsRouter.patch("/update/username/:username", param("username").notEmpty().isLength({min: 4}),  async (req, res) => {
    let result = validationResult(req)
    if(!result.isEmpty()) {
        res.status(500).json({ message: "Error", errors: result.array()})
    }
    else {
        let newSettings = await updateUsername(req.params.username);


        res.status(200).json({message: "Success", data: newSettings});
    }
})

SettingsRouter.patch("/update/theme", async (req, res) => {
    res.send("Coming Soon!")
})