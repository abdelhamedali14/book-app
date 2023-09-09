import { createContext, useState } from "react";
//import file json who has the books 
import Books from "./books.json";

export const BooksContext = createContext();

export const BooksControllerProvider = ({ children }) => {
  //state to  handel the books 
  const [tableBooks, setTableBooks] = useState(Books);
    //add new book to array 
  const addNewBookHandler = (newBook = {}) => {
    newBook.id = String(Math.random());
    setTableBooks((prev) => [...prev, newBook]);
  };

  //delete book from the array
  const deleteBookHandler = (bookId) => {
    setTableBooks((prev) => prev.filter((book) =>book && book.id !== bookId));
  };

  //access the choosen book and accesss it by array
  const getBookByIdHandler = (bookId) => {
    return tableBooks.filter((book) => book.id === bookId);
  };
//edit book
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
