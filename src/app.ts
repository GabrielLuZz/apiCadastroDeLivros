import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import usersRoutes from "./routes/users.routes";
import booksRoutes from "./routes/books.routes";

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));
server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.use("/users", usersRoutes);
server.use("/books", booksRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado" });
});

server.listen(process.env.PORT);
