import express, { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

interface BooksDetails {
    title: string,
    description: string,
    link: string
}

router.post("/", async (req: Request, res:Response)=>{
    const Bookdetails: BooksDetails = req.body;
    const book = await prisma.books.findFirst({
        where: {
          title: Bookdetails.title // Assuming 'details.title' holds the title you're searching for
        }
      });
    if(!book){
        const newBook = await prisma.books.create({
            data: {
                title: Bookdetails.title,
                description : Bookdetails.description,
                link : Bookdetails.link,
            }
        });
        res.status(201).json({message: "Book created successfully!"});
    }
    res.status(400).json({message: "Book Title already exist! "})
})


export default router;