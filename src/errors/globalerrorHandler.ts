import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { handleValidationError } from "./handleValidationError";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // ✅ Mongoose validation error
  if (err instanceof mongoose.Error.ValidationError) {
    const errorResponse = handleValidationError(err);
    return res.status(400).json(errorResponse);
  }

  // ✅ Normal JS error
  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message,
      success: false,
      error: {
        name: err.name,
        stack: err.stack,
      },
    });
  }

  // ✅ Fallback for unexpected errors
  res.status(500).json({
    message: "An unknown error occurred",
    success: false,
    error: err,
  });
};
