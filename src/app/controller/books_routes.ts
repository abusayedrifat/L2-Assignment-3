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

booksRoutes.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const createdBook = await Books.create(body)

    res.json({
        success: true,
        message: "Book created successfully",
        data: createdBook
    })

})


booksRoutes.get('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId
    const book = await Books.findById(bookId)
    res.json({
        success: true,
        message: "Book retrived successfully",
        data: book 
    })
})
booksRoutes.patch('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId
    const updateBody = req.body
    const updatedBook = await Books.findByIdAndUpdate(bookId, updateBody, {new:true} )
    res.json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
    })
})


booksRoutes.delete('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId
    const deletedBook = await Books.findByIdAndDelete(bookId)
    res.json({
        success: true,
        message: "Book retrived successfully",
        data: deletedBook
    })
})


