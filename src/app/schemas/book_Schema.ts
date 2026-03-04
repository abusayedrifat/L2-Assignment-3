import { model, Schema } from "mongoose";
import { Book } from "../interfaces/books_interface";

const bookSchema = new Schema<Book>({
    title:{
        type: String,
        required:true
    },
    author:{
        type:String,
        required: true
    },
    genre: {
        type:String,
        enum: ["FICTION" , "NON_FICTION" , "SCIENCE" , "HISTORY" , "BIOGRAPHY" , "FANTASY"],
        required: true
    },
    isbn:{
        type:String,
        required: true
    },
    description: {type:String},
    copies:{
        type:Number,
        required: true
    },
    available:{
        type:Boolean,
        default:true
    }
},
{
    versionKey:false,
    timestamps:true
}
)


 export const Books = model('Books', bookSchema)