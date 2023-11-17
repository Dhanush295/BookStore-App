import express, { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

interface BooksDetails {
    title: string,
    description: string,
    link: string
}

router.post("/createbook", async (req: Request, res:Response)=>{
    const Bookdetails: BooksDetails = req.body;
    const book = await prisma.books.findFirst({
        where: {
          title: Bookdetails.title
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

router.get("/", async(req: Request, res: Response)=>{
    const allbooks = await prisma.books.findMany();
    res.json({allbooks})
});


router.patch("/update/:ID", async(req:Request, res: Response)=>{
    const bookid : number = parseInt(req.params.ID) 
    const book: BooksDetails = req.body;
    const updatebooks = await prisma.books.update({
        where: {id: bookid},
        data:{
             title: book.title,
            description : book.description,
            link : book.link,
        }
    })
    res.status(200).json({updatebooks})
});

router.delete("/delete/:id", async(req: Request, res: Response)=>{
    const bookid : number = parseInt(req.params.id)
    console.log(bookid);
    prisma.books.delete({
        where: {
             id : bookid
            }
    })
    res.status(200).json({message: "Book Deleted Successfully!" })
});

export default router;