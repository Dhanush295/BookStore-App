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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/createbook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Bookdetails = req.body;
    const book = yield prisma.books.findFirst({
        where: {
            title: Bookdetails.title
        }
    });
    if (!book) {
        const newBook = yield prisma.books.create({
            data: {
                title: Bookdetails.title,
                description: Bookdetails.description,
                link: Bookdetails.link,
            }
        });
        res.status(201).json({ message: "Book created successfully!" });
    }
    res.status(400).json({ message: "Book Title already exist! " });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allbooks = yield prisma.books.findMany();
    res.json({ allbooks });
}));
router.patch("/update/:ID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookid = parseInt(req.params.ID);
    const book = req.body;
    const updatebooks = yield prisma.books.update({
        where: { id: bookid },
        data: {
            title: book.title,
            description: book.description,
            link: book.link,
        }
    });
    res.status(200).json({ updatebooks });
}));
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookid = parseInt(req.params.id);
    console.log(bookid);
    const deletebook = yield prisma.books.delete({
        where: {
            id: bookid
        }
    });
    res.status(200).json({ message: "Book Deleted Successfully!", deletebook });
}));
exports.default = router;
