import books from "../../database/books";

const deleteBookService = (index: number) => {
  books.splice(index, 1);

  return "Book deleted";
};

export default deleteBookService;
