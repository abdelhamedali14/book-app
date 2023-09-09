import Header from "../../components/header/Header";
import SideBar from "../../components/side-bar/SideBar";
import { BookList } from "../../components/book list/BookList";
import { ConfirmDialog } from "primereact/confirmdialog";

import "./dashbord.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddBook from "../add book/AddBook";
import BookDetails from "../book details/BookDetails";
export default function Dashbord() {
  return (
    <>
      <ConfirmDialog />
      <div className="dashbord-wrapper">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="header">
          <Header />
          <div className="app">
            <Router>
              <Routes>
                <Route path="/" element={<Navigate to="/books-list" />} />
                <Route path="/books-list" element={<BookList />} />
                <Route
                  path="/add-book"
                  element={<AddBook edit={false} />}
                />
                <Route
                  path="/edit-book/:id"
                  element={<AddBook edit={true} />}
                />
                <Route path="/book-details/:id" element={<BookDetails />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}
