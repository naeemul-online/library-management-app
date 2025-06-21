"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    const errors = {};
    Object.values(err.errors).forEach((el) => {
        errors[el.path] = el.message;
    });
    return {
        message: "Validation failed",
        errorDetails: errors,
    };
};
exports.handleValidationError = handleValidationError;
