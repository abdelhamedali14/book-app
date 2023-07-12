import { useContext } from "react";
import { BooksContext } from "../../Contexts/BooksContext";
import "./deletebook.scss";
export default function DeleteBook() {
  const { getBookByIdHandler, editBookHandler } = useContext(BooksContext);

  return <div>DeleteBook</div>;
}
