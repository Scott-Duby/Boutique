import { updateItemFields, updateItemName, updateItemSold, updateItemUrl } from "../../Controllers/items.controller";
import { ItemPayloadBuilder } from "../../utils/ItemPayloadBuilder";
import { ItemReturnMessage } from "../../utils/Interfaces/ItemReturnMessage";
import ItemsRouter from "./items.router";
import { Request, Response } from "express";
import { ItemParams } from "./items.router";
import { param, body, validationResult } from "express-validator";
import { FieldTypes } from "../../utils/FieldTypes";


ItemsRouter.patch(
  "/update/name/:id/:name",
  param("id").exists().isInt().toInt(),
  param("name").exists().isString().trim().escape(),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    const { id, name } = req.params;

    let payload: ItemReturnMessage;

    try {
      let item = await updateItemName(id, name);
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

ItemsRouter.patch(
  "/update/:id/url",
  param("id").exists().isInt().toInt(),
  body("web_url")
    .exists()
    .isURL()
    .withMessage("url must be a valid URL")
    .trim(),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    const { id } = req.params;
    const { web_url } = req.body;
    let payload: ItemReturnMessage;
    try {
      let item = await updateItemUrl(id, web_url);
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

ItemsRouter.patch(
  "/update/sold/:id/:sold",
  param("id").exists().isInt().toInt(),
  param("sold")
    .exists()
    .toInt()
    .isIn([0, 1])
    .withMessage("value must be 0 or 1"),
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    const { id, sold } = req.params;

    let payload: ItemReturnMessage;

    try {
      let item = await updateItemSold(id, sold);
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

ItemsRouter.patch(
  "/update/:id",
  [
    param("id").exists().isInt().toInt(), // Validate that id is an integer
    body("updates")
      .isArray({ min: 1 })
      .withMessage("updates must be an array with at least one update"),
    body("updates.*.field")
      .isString()
      .withMessage("Each update must have a valid field name")
      .custom((field) => {
        if (!FieldTypes[field]) {
          throw new Error(`Invalid field: ${field}`);
        }
        return true;
      }),
    body("updates.*.value").custom((value, { req }) => {
      const field = req.body.updates.find((update: any) => update.value === value)?.field;
      const expectedType = FieldTypes[field];

      if (!expectedType) {
        throw new Error(`Cannot validate value for an invalid field: ${field}`);
      }

      // Validate the value's type
      if (expectedType === "number" && typeof value !== "number") {
        throw new Error(`Value for field "${field}" must be a number`);
      }

      if (expectedType === "string" && typeof value !== "string") {
        throw new Error(`Value for field "${field}" must be a string`);
      }

      if (expectedType === "boolean" && typeof value !== "boolean") {
        throw new Error(`Value for field "${field}" must be a boolean`);
      }

      return true;
    }),
  ],
  async (req: Request<ItemParams>, res: Response): Promise<any> => {
    const { id } = req.params;
    const { updates } = req.body;

    let payload: ItemReturnMessage;

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      const updatedItem = await updateItemFields(id, updates);
      payload = {
        items: updatedItem,
        message: "success",
        status_code: 200,
        errors: "none",
        operationComplete: true,
      };
    } catch (error) {
      payload = {
        items: [],
        message: "fail",
        status_code: 500,
        errors: error.message,
        operationComplete: false,
      };
    }

    return res.status(payload.status_code).json(payload);
  }
);

export default ItemsRouter;