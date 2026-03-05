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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_Schema_1 = require("../schemas/book_Schema");
exports.booksRoutes = express_1.default.Router();
exports.booksRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = yield book_Schema_1.Books.find();
    console.log(allBooks);
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data: allBooks,
    });
}));
exports.booksRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const createdBook = yield book_Schema_1.Books.create(body);
    res.json({
        success: true,
        message: "Book created successfully",
        data: createdBook
    });
}));
exports.booksRoutes.get('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield book_Schema_1.Books.findById(bookId);
    res.json({
        success: true,
        message: "Book retrived successfully",
        data: book
    });
}));
exports.booksRoutes.patch('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const updateBody = req.body;
    const updatedBook = yield book_Schema_1.Books.findByIdAndUpdate(bookId, updateBody, { new: true });
    res.json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
    });
}));
exports.booksRoutes.delete('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const deletedBook = yield book_Schema_1.Books.findByIdAndDelete(bookId);
    res.json({
        success: true,
        message: "Book retrived successfully",
        data: deletedBook
    });
}));
