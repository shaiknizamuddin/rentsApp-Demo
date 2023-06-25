import { Request, Response } from "express";
import tenentSchema from "../models/tenent-model";
import { handleError, handleSuccess } from "../util/handlers";

export const createTenent = (req: Request, res: Response) => {
  const tenentDet = new tenentSchema(req.body);

  tenentDet
    .save()
    .then((result) => {
      if (result) {
        handleSuccess(res, "Tenent created successfully", result);
      }
    })
    .catch((error) => {
      handleError(res, "Unable to create user: Tenent", error);
    });
};

export const fetchTenent = (req: Request, res: Response) => {
  const query = { _id: req.params.id };
  tenentSchema
    .findOne(query)
    .then((result) => {
      handleSuccess(res, "fetch tenent successful", result);
    })
    .catch((error) => {
      handleError(res, "Unable to fetch tenent", error);
    });
};
