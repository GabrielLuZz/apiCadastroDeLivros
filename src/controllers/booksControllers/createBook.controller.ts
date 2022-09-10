import { Request, Response } from "express";
import createBookService from "../../services/booksServices/createBook.service";

const createBookController = (req: Request, res: Response) => {
  const { title, author, owner_id, year } = req.body;

  const book = createBookService(title, author, owner_id, year);

  res.status(201).json(book);
};

export default createBookController;
