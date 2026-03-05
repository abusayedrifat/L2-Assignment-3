"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_routes_1 = require("./app/controller/books_routes");
// import cors from 'cors';
const app = (0, express_1.default)();
// const corsOption = {
//     origin:['https://library-management-alpha-seven.vercel.app'],
//     credentials:true
// }
// app.use(cors())
app.use(express_1.default.json());
app.use('/api/books', books_routes_1.booksRoutes);
app.get('/', (req, res) => {
    res.send('library management server is running');
});
exports.default = app;
