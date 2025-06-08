import express, { Request, Response } from "express";
import {
  createItem,
  deleteItem,
  bulkCreateItems,
} from "../../Controllers/items.controller";
import { ItemReturnMessage } from "../../utils/Interfaces/ItemReturnMessage";
import { ItemPayloadBuilder } from "../../utils/ItemPayloadBuilder";
import { param, body } from "express-validator";

export interface ItemParams {
  id: number;
  name: string;
  bin_id: number;
  sold: 1 | 0; // 1 = sold, 0 = not sold
  web_url: string;
}

// Define the default select for the item

const ItemsRouter = express.Router();

ItemsRouter.post(
  "/create/:name",
  param("name").isString().trim().escape(),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    const { name } = req.params;

    let payload: ItemReturnMessage;

    try {
      let item = await createItem(name);
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
        status_code: 500,
        errors: error.message,
        operationComplete: false,
      });
    }
    return res.status(payload.status_code).json(payload);
  },
);

ItemsRouter.delete(
  "/delete/:id",
  param("id").exists().isInt().toInt(),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {

    const { id } = req.params;

    let payload: ItemReturnMessage;

    try {
      let item = await deleteItem(id);

      payload = ItemPayloadBuilder({
        items: [],
        message: "success",
        status_code: 200,
        errors: "none",
        operationComplete: item,
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

ItemsRouter.post(
  "/bulk/create",
  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be an array with at least one item"),
  body("items.*.name")
    .isString()
    .trim()
    .escape()
    .withMessage("Each item must have a valid name"),
  body("items.*.binId")
    .optional()
    .isInt()
    .withMessage("binId must be a valid integer"),
  body("items.*.sold")
    .optional()
    .isBoolean()
    .withMessage("sold must be a boolean value"),
    body("items.*.web_url")
    .optional()
    .isURL()
    .withMessage("url must be a valid URL"),
  async (req: Request, res: Response): Promise<any> => {
    const { data } = req.body;
    let payload: ItemReturnMessage;
    try {
      const createdItems = await bulkCreateItems(data.values.value.items);
      payload = ItemPayloadBuilder({
        items: createdItems,
        message: "success",
        status_code: 201,
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
      console.log(req.body.data.values)
      console.log(error.message)
    }

    return res.status(payload.status_code).json(payload);
  }
);

export default ItemsRouter;
