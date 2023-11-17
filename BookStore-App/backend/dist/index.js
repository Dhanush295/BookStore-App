"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const books_1 = __importDefault(require("./routes/books"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), "../", ".env") });
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const URL = process.env.URL;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", books_1.default);
console.log(PORT);
app.listen(PORT, () => { console.log(`Server running on ${URL}:${PORT}`); });
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
