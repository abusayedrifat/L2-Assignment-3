import  express, { Request, Response }  from 'express';


export const borrowBook = express.Router()


borrowBook.post('/',(req:Request, res:Response)=>{
    const body = req.body;

    
})

