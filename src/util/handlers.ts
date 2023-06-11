import { Response } from "express";

const defaultErrorMessage =
  "Something went wrong. If this issue persists, something may have broken. There may be further information in the console.";

export const logError = (error: Error, message?: string) => {
  console.error("SEVERE: " + message, error.message);
};

export const handleError = (
  res: Response,
  errorMessage: string,
  error: any,
  show = true
) => {
  console.error("Error from user: " + error);
  return res.status(400).send({
    success: false,
    code: 400,
    message: show ? errorMessage : defaultErrorMessage,
    error: error,
  });
};

export const handleSuccess = (res: Response, message: string, data: any) => {
  return res.status(200).send({
    success: true,
    code: 200,
    message: message,
    data: data,
  });
};
