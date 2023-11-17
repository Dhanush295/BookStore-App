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
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Bookdetails = req.body;
    const book = yield prisma.books.findFirst({
        where: {
            title: Bookdetails.title // Assuming 'details.title' holds the title you're searching for
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
exports.default = router;
