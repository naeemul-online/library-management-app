"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    return {
        message: "Validation failed",
        success: false,
        error: {
            name: err.name,
            errors: err.errors,
        },
    };
};
exports.handleValidationError = handleValidationError;
