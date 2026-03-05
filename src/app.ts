import express, { Application, Request, Response } from "express";

import cors from 'cors'
import { booksRoutes } from "./app/controller";


const app: Application = express()
app.use(express.json())
const corsOption = {
    origin:['https://library-management-alpha-seven.vercel.app'],
    credentials:true
}
app.use(cors(corsOption))



app.use('/api/books', booksRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('library management server is running')
})



export default app;