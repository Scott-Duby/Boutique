import express, { Request, Response } from "express";
import {
  createBin,
  deleteBin,
} from "../../Controllers/bins.controller";
import { param, validationResult } from "express-validator";
import { BinReturnMessage } from "../../utils/Interfaces/BinReturnMessage";
import { payloadBuilder } from "../../utils/BinPayloadBuilder";

const BinsRouter = express.Router();

export interface BinParams {
  id: number;
  name?: string;
  value?: string;
  item_id?: number;
  bool?: 1 | 0;
}

BinsRouter.post(
  "/create/:name",
  param("name").isString().exists().trim(),
  async (req: Request, res: Response): Promise<any> => {
    const result = validationResult(req);

    let { name } = req.params;
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      try {
        const bin = await createBin(name);

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

BinsRouter.delete(
  "/delete/:id",
  param("id").isInt().toInt(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req);

    let payload: BinReturnMessage;
    let { id } = req.params;

    if (result.isEmpty()) {
      try {
        const bin = await deleteBin(id); // Returns boolean on delete

        payload = payloadBuilder({
          data: [],
          message: "success",
          status_code: 200,
          errors: "none",
          operationComplete: bin, // Boolean
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


export default BinsRouter;
