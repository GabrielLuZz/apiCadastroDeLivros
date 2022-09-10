import books from "../../database/books";
import Book from "../../@types/book.type";

const updateBookService = (newBook: Book, index: number) => {
  newBook.owner_id = books[index].owner_id;

  books[index] = { ...books[index], ...newBook };

  return books[index];
};

export default updateBookService;
