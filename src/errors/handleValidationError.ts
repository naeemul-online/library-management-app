import { Error } from "mongoose";

export const handleValidationError = (err: Error.ValidationError) => {
  const errors: Record<string, string> = {};

  Object.values(err.errors).forEach((el) => {
    errors[el.path] = el.message;
  });

  return {
    message: "Validation failed",
    errorDetails: errors,
  };
};
