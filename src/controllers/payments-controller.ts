import { Request, Response } from "express";
import paymentSchema from "../models/payments-model";
import { handleError, handleSuccess } from "../util/handlers";

export const addPayment = (req: Request, res: Response) => {
  const paymentDet = new paymentSchema(req.body);

  paymentDet
    .save()
    .then((result) => {
      if (result) {
        handleSuccess(res, "Payment added successfully", result);
      }
    })
    .catch((error) => {
      handleError(res, "Unable to create : Payment", error);
    });
};
