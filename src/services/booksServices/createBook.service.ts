import { v4 as uuidV4 } from "uuid";
import books from "../../database/books";

const createBookService = (
  title: string,
  author: string,
  owner_id: string,
  year: string
) => {
  const newBook = {
    title,
    author,
    owner_id,
    id: uuidV4(),
    year,
  };

  books.push(newBook);

  return newBook;
};

export default createBookService;
