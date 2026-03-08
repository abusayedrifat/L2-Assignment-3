import { model, Schema } from "mongoose";
import { borrow } from "../interfaces/borrow_book";
import { Books } from "./book_Schema";

const borrowSchema = new Schema<borrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Books",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    _id: false,
  },
);


borrowSchema.pre("aggregate", async function (next) {

  await Books.aggregate([
    {
      //stage-1
      $match: {
        copies: { $gt: 0 },
      },
      //stage-2
      $set: {
        copies: {
          $subtract: ["copies", "quantity"],
        },
      },
    },
  ]);
  
});

// borrowSchema.post('save', async function (doc) {
//   const bookSave =  await Books.findById({copies:doc._id})
//   bookSave?.save()
// })

export const BorrowBooks = model("borrowBooks", borrowSchema);
