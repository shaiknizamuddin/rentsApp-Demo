import { Request, Response } from "express";
import propertySchema from "../models/property-model";
import { handleError, handleSuccess } from "../util/handlers";

export const addProperty = (req: Request, res: Response) => {
  const propertyDet = new propertySchema(req.body);

  propertyDet
    .save()
    .then((result) => {
      if (result) {
        handleSuccess(res, "Property added successfully", result);
      }
    })
    .catch((error) => {
      handleError(res, "Unable to create : Property", error);
    });
};

export const fetchProperty = (req: Request, res: Response) => {
  const query = { _id: req.params.id };
  propertySchema
    .findOne(query)
    .then((result) => {
      handleSuccess(res, "fetch property details successful", result);
    })
    .catch((error) => {
      handleError(res, "Unable to fetch property details", error);
    });
};
