import { Request, Response } from "express";
import BinsRouter from "./bins.router";
import { BinReturnMessage } from "../../utils/Interfaces/BinReturnMessage";
import { payloadBuilder } from "../../utils/BinPayloadBuilder"
import { body, param, validationResult } from "express-validator";
import { updateBinName, updateBinIsFull, updateBinFields, addItemToBin, removeItemFromBin } from "../../Controllers/bins.controller";
import { BinParams } from "./bins.router";
import { BinFieldTypes } from "../../utils/FieldTypes";


/** @depracated **/ 
BinsRouter.patch(
  "/update/:id/name/:value",
  param("id").isInt().toInt(),
  param("value").isString().exists().trim(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req);

    let { id, value } = req.params;
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      try {
        const bin = await updateBinName(id, value);

        payload = payloadBuilder({
          data: bin,
          message: "success",
          status_code: 200,
          errors: "This route is depracated",
          operationComplete: true,
        });
      } catch (error) {
        payload = payloadBuilder({
          data: [],
          message: "failure",
          status_code: 500,
          errors: error,
          operationComplete: false,
        });
      }
    } else {
      payload = payloadBuilder({
        data: [],
        message: "failure",
        status_code: 400,
        errors: result.array(),
        operationComplete: false,
      });
    }

    return res.status(payload.status_code).send(payload);
  },
);

/**  @deprecated **/
BinsRouter.patch(
  "/update/:id/is_full/:bool",
  param("id").isInt().toInt(),
  param("bool").isIn([1, 0]).withMessage("Value must be 0 or 1").toInt(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req);

    let { id, bool } = req.params;
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      try {
        const bin = await updateBinIsFull(id, bool);

        payload = payloadBuilder({
          data: bin,
          message: "success",
          status_code: 200,
          errors: "This route is depracated",
          operationComplete: true,
        });
      } catch (error) {
        payload = payloadBuilder({
          data: [],
          message: "failure",
          status_code: 500,
          errors: error,
          operationComplete: false,
        });
      }
    } else {
      payload = payloadBuilder({
        data: [],
        message: "failure",
        status_code: 400,
        errors: result.array(),
        operationComplete: false,
      });
    }

    return res.status(payload.status_code).send(payload);
  },
);

BinsRouter.patch(
  "/update/:id/add/item/:item_id",
  param("id").isInt().toInt(),
  param("item_id").isInt().toInt(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req);

    let { id, item_id } = req.params;
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      try {
        const bin = await addItemToBin(id, item_id);

        payload = payloadBuilder({
          data: bin,
          message: "success",
          status_code: 200,
          errors: "none",
          operationComplete: true,
        });
      } catch (error) {
        payload = payloadBuilder({
          data: [],
          message: "failure",
          status_code: 500,
          errors: error,
          operationComplete: false,
        });
      }
    } else {
      payload = payloadBuilder({
        data: [],
        message: "failure",
        status_code: 400,
        errors: result.array(),
        operationComplete: false,
      });
    }

    return res.status(payload.status_code).send(payload);
  },
);

BinsRouter.patch(
  "/update/:id/remove/item/:item_id",
  param("id").isInt().toInt(),
  param("item_id").isInt().toInt(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req);

    let { id, item_id } = req.params;
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      try {
        const bin = await removeItemFromBin(id, item_id);

        payload = payloadBuilder({
          data: bin,
          message: "success",
          status_code: 200,
          errors: "none",
          operationComplete: true,
        });
      } catch (error) {
        payload = payloadBuilder({
          data: [],
          message: "failure",
          status_code: 500,
          errors: error,
          operationComplete: false,
        });
      }
    } else {
      payload = payloadBuilder({
        data: [],
        message: "failure",
        status_code: 400,
        errors: result.array(),
        operationComplete: false,
      });
    }

    return res.status(payload.status_code).send(payload);
  },
);
BinsRouter.patch(
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
        if (!BinFieldTypes[field]) {
          throw new Error(`Invalid field: ${field}`);
        }
        return true;
      }),
    body("updates.*.value").custom((value, { req }) => {
      const field = req.body.updates.find((update: any) => update.value === value)?.field;
      const expectedType = BinFieldTypes[field];

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
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const { id } = req.params;
    const { updates } = req.body;

    let payload: BinReturnMessage;

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      const updatedItem = await updateBinFields(id, updates);
      payload = {
        data: updatedItem,
        message: "success",
        status_code: 200,
        errors: "none",
        operationComplete: true,
      };
    } catch (error) {
      payload = {
        data: [],
        message: "fail",
        status_code: 500,
        errors: error.message,
        operationComplete: false,
      };
    }

    return res.status(payload.status_code).json(payload);
  }
);

export default BinsRouter