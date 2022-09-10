import { Request, Response } from "express";
import listBooksService from "../../services/booksServices/listBooks.service";

const listBooksController = (req: Request, res: Response) => {
  const books = listBooksService();

  res.json(books);
};

export default listBooksController;
