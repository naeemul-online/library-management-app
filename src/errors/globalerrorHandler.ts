import { ErrorRequestHandler } from "express";
import { ApiError } from "./ApiError";
import { Error as MongooseError } from "mongoose";
import { handleValidationError } from "./handleValidationError";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let error = {};

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof MongooseError.ValidationError) {
    statusCode = 400;
    const simplified = handleValidationError(err);
    message = simplified.message;
    error = simplified.errorDetails;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
