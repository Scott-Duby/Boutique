import { Request, Response, NextFunction } from "express";
import BinsRouter from "./bins.router";
import { BinReturnMessage } from "../../utils/Interfaces/BinReturnMessage";
import { payloadBuilder } from "../../utils/BinPayloadBuilder"
import { param, validationResult } from "express-validator";
import { getBins, getBin } from "../../Controllers/bins.controller";
import { BinParams } from "./bins.router";

BinsRouter.get(
  "/",
  async (
    _: Request,
    res: Response,
    __: NextFunction,
  ): Promise<any> => {
    let payload: BinReturnMessage; 
    try {
      const bins = await getBins();
      payload = payloadBuilder({
        data: bins,
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
    return res.status(payload.status_code).send(payload);
  },
);

BinsRouter.get(
  "/:id",
  param("id").isInt().toInt(),
  async (req: Request<BinParams>, res: Response): Promise<any> => {
    const result = validationResult(req); // Validate errors
    let { id } = req.params; // Destructure id from request params
    let payload: BinReturnMessage;

    if (result.isEmpty()) {
      // Passes test calls controller function
      try {
        const bin = await getBin(id);
        if (!bin) {
          throw new Error("Bin not found");
        }
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
          status_code: error.message == "Bin not found" ? 404 : 500,
          errors: error.message,
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