import express, { Request, Response } from "express";
import { BorrowBooks } from "../schemas/borrow_schema";
import { Books } from "../schemas/book_Schema";


export const borrowBook = express.Router();

borrowBook.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  const books = await Books.findById(body._id)
 
  console.log(books);
  

  const borrowedBooks = await BorrowBooks.create(body);
console.log(borrowBook);

  res.json({
    success: true,
    message: "Book borrowed successfully",
    data: borrowedBooks,
  });
});


borrowBook.get("/", async (req: Request, res: Response) => {

  const allBorrowedBooks = await BorrowBooks.find().populate("book");

  res.json({
    success: true,
    message: "Borrowed books summary retrieved successfully",
    data: allBorrowedBooks
  });

});
