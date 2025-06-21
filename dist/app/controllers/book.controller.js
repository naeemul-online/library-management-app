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
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
const book_model_1 = require("../models/book.model");
// Create a Book
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.Book.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createBook = createBook;
// Get All Books
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = "createdAt", sort = "desc", limit = "10", } = req.query;
        const query = {};
        if (filter)
            query.genre = filter;
        const books = yield book_model_1.Book.find(query)
            .sort({ [sortBy]: sort === "asc" ? 1 : -1 })
            .limit(Number(limit));
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllBooks = getAllBooks;
// Get Book by ID
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const book = yield book_model_1.Book.findById(bookId);
        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getBookById = getBookById;
// Update Book
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const updatedBook = yield book_model_1.Book.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateBook = updateBook;
// Delete Book
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const deleted = yield book_model_1.Book.findByIdAndDelete(bookId);
        if (!deleted) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBook = deleteBook;
