import { param } from "express-validator";
import { getItems, getItemById } from "../../Controllers/items.controller";
import { ItemPayloadBuilder } from "../../utils/ItemPayloadBuilder";
import { ItemReturnMessage } from "../../utils/Interfaces/ItemReturnMessage";
import ItemsRouter from "./items.router";
import { Request, Response } from "express";
import { ItemParams } from "./items.router"

ItemsRouter.get(
  "/",
  async (_: Request<ItemParams>, res: Response): Promise<any> => {
    let payload: ItemReturnMessage;

    try {
      let items = await getItems();
      payload = ItemPayloadBuilder({
        items: items,
        message: "success",
        status_code: 200,
        errors: "none",
        operationComplete: true,
      });
    } catch (error) {
      payload = ItemPayloadBuilder({
        items: [],
        message: "fail",
        status_code: 500,
        errors: error.message,
        operationComplete: false,
      });
    }

    return res.status(payload.status_code).json(payload);
  },
);

ItemsRouter.get(
  "/:id",
  param("id").isInt().toInt(),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    let payload: ItemReturnMessage;
    let id = req.params.id;

    try {
      let item = await getItemById(id);

      if (!item) {
        throw new Error("Item not found");
      }

      payload = ItemPayloadBuilder({
        items: item,
        message: "success",
        status_code: 200,
        errors: "none",
        operationComplete: true,
      });
    } catch (error) {
      payload = ItemPayloadBuilder({
        items: [],
        message: "fail",
        status_code: error.message == "Item not found" ? 404 : 500, // 404 if item not found, 500 if other error
        errors: error.message,
        operationComplete: false,
      });
    }
    return res.status(payload.status_code).json(payload);
  },
);

export default ItemsRouter