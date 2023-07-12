import { createContext, useState } from "react";

import Books from "./books.json";

export const BooksContext = createContext();

export const BooksControllerProvider = ({ children }) => {
  const [tableBooks, setTableBooks] = useState(Books);

  const addNewBookHandler = (newBook = {}) => {
    newBook.id = String(Math.random());
    setTableBooks((prev) => [...prev, newBook]);
    console.log("new book is Daddes");
    console.log(tableBooks);
  };

  const deleteBookHandler = (bookId) => {
    setTableBooks((prev) => prev.filter((book) => book.id !== bookId));
  };

  const getBookByIdHandler = (bookId) => {
    return tableBooks.filter((book) => book.id === bookId);
  };

  const editBookHandler = (id, newBook) => {
    deleteBookHandler(id);
    addNewBookHandler(newBook);
  };

  return (
    <BooksContext.Provider
      value={{
        tableBooks,
        setTableBooks,
        addNewBookHandler,
        deleteBookHandler,
        getBookByIdHandler,
        editBookHandler,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
