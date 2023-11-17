import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import books  from "./routes/books";

dotenv.config({ path: path.join(process.cwd(),"../", ".env") });
const app = express();

const PORT = process.env.PORT;
const URL = process.env.URL;

app.use(cors());
app.use(express.json());

app.use("/", books)

console.log(PORT);


app.listen(PORT, () => { console.log(`Server running on ${URL}:${PORT}`);});






// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
