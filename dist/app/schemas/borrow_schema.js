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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBooks = void 0;
const mongoose_1 = require("mongoose");
const book_Schema_1 = require("./book_Schema");
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    _id: false,
});
borrowSchema.pre("aggregate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield book_Schema_1.Books.aggregate([
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
});
// borrowSchema.post('save', async function (doc) {
//   const bookSave =  await Books.findById({copies:doc._id})
//   bookSave?.save()
// })
exports.BorrowBooks = (0, mongoose_1.model)("borrowBooks", borrowSchema);
