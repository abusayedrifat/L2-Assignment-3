import express, { Application, Request, Response } from "express";
import { booksRoutes } from "./app/controller/books_routes";

// import cors from 'cors';


const app: Application = express()
// const corsOption = {
//     origin:['https://library-management-alpha-seven.vercel.app'],
//     credentials:true
// }
// app.use(cors())

app.use(express.json());


app.use('/api/books', booksRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('library management server is running')
})



export default app;