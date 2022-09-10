import { Request, Response, NextFunction } from "express";
import books from "../database/books";

const verifyBookExistenceByIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json("Book not found");
  }

  req.index = index;
  req.id = id;
  next();
};

export default verifyBookExistenceByIdMiddleware;
