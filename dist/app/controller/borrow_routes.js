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
exports.borrowBook = void 0;
const express_1 = __importDefault(require("express"));
const borrow_schema_1 = require("../schemas/borrow_schema");
const book_Schema_1 = require("../schemas/book_Schema");
exports.borrowBook = express_1.default.Router();
exports.borrowBook.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const books = yield book_Schema_1.Books.findById(body._id);
    console.log(books);
    const borrowedBooks = yield borrow_schema_1.BorrowBooks.create(body);
    console.log(exports.borrowBook);
    res.json({
        success: true,
        message: "Book borrowed successfully",
        data: borrowedBooks,
    });
}));
exports.borrowBook.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBorrowedBooks = yield borrow_schema_1.BorrowBooks.find().populate("book");
    res.json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: allBorrowedBooks
    });
}));
