"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError_1 = require("./handleValidationError");
const globalErrorHandler = (err, req, res, _next) => {
    // ✅ Mongoose validation error
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        const errorResponse = (0, handleValidationError_1.handleValidationError)(err);
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
exports.globalErrorHandler = globalErrorHandler;
