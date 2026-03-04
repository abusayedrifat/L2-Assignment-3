import express, { Request, Response } from 'express';
import { Books } from '../schemas/book_Schema';

export const booksRoutes = express.Router()




booksRoutes.get('/', async (req: Request, res: Response) => {
  
    const allBooks = await Books.find()
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data: allBooks
    })
})

booksRoutes.post('/create-book', async (req: Request, res: Response) => {
    const body = req.body;
    const myBook = await Books.create(body)

    res.json({
        success: true,
        message: "Book created successfully",
        data: myBook
    })

})