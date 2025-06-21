"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = __importDefault(require("./app/routes/book.route"));
const borrow_route_1 = __importDefault(require("./app/routes/borrow.route"));
const globalerrorHandler_1 = require("./errors/globalerrorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api", book_route_1.default);
app.use("/api", borrow_route_1.default);
app.use(globalerrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Library Management App is running");
});
exports.default = app;
