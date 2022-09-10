import { Request, Response } from "express";
import updateBookService from "../../services/booksServices/updateBook.service";

const updateBookController = (req: Request, res: Response) => {
  const newBook = req.body;
  const index = req.index as number;
  const id = req.id;

  newBook.id = id;

  const user = updateBookService(newBook, index);

  res.json(user);
};

export default updateBookController;
