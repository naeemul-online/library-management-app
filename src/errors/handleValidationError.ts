import { Error as MongooseError } from "mongoose";

export const handleValidationError = (err: MongooseError.ValidationError) => {
  return {
    message: "Validation failed",
    success: false,
    error: {
      name: err.name,
      errors: err.errors,
    },
  };
};
