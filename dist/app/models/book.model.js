"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
        type: String,
        enum: [
            "FICTION",
            "NON_FICTION",
            "SCIENCE",
            "HISTORY",
            "BIOGRAPHY",
            "FANTASY",
        ],
        required: true,
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String, trim: true },
    copies: {
        type: Number,
        required: true,
        min: [0, "Copies must be a non-negative number"],
    },
    available: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
bookSchema.pre("save", function (next) {
    this.title = this.title.trim();
    this.author = this.author.trim();
    next();
});
// book available logic
bookSchema.statics.decreaseCopies = function (bookId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield this.findById(bookId);
        if (!book)
            throw new Error("Book not found");
        if (book.copies < quantity)
            throw new Error("Not enough copies available");
        book.copies -= quantity;
        book.available = book.copies > 0;
        yield book.save();
        return book;
    });
};
exports.Book = (0, mongoose_1.model)("Book", bookSchema);
