"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const ApiError_1 = require("./ApiError");
const mongoose_1 = require("mongoose");
const handleValidationError_1 = require("./handleValidationError");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    let error = {};
    if (err instanceof ApiError_1.ApiError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof mongoose_1.Error.ValidationError) {
        statusCode = 400;
        const simplified = (0, handleValidationError_1.handleValidationError)(err);
        message = simplified.message;
        error = simplified.errorDetails;
    }
    else if (err instanceof Error) {
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};
exports.globalErrorHandler = globalErrorHandler;
