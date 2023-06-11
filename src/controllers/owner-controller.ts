import { Request, Response } from "express";
import ownerSchema from "../models/owner-model";
import { handleError, handleSuccess } from "../util/handlers";

export const registerOwner = (req: Request, res: Response) => {
  const userDet = new ownerSchema({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    role: "Admin",
  });

  userDet
    .save()
    .then((result) => {
      if (result) {
        handleSuccess(res, "Owner registered successfully", result);
      }
    })
    .catch((error) => {
      handleError(res, "Unable to create user: Owner", error);
    });
};

export const fetchOwner = (req: Request, res: Response) => {
  const query = { _id: req.params.id };
  ownerSchema
    .findOne(query)
    .then((result) => {
      handleSuccess(res, "fetch owner successful", result);
    })
    .catch((error) => {
      handleError(res, "Unable to fetch owner", error);
    });
};
