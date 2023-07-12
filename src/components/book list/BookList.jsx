import React, { useState, useEffect,useContext } from "react";
import Button from "../UI/button/Button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";


import { BooksContext } from "../../Contexts/BooksContext";
import "./bookinglist.scss";
import ButtonsGroup from "../buttons group/ButtonsGroup";
export const BookList = () => {
  const {tableBooks}=useContext(BooksContext)
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState(tableBooks);

  useEffect(() => {

    const filtered = tableBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        book.author.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilter(filtered);
  }, [searchInput, tableBooks]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };


  const tableHeaders = [
    { field: "title", header: "Book Title", width: "20%" },
    { field: "category", header: "Book Category", width: "20%" },
    { field: "author", header: "Book Author", width: "20%" },
    { field: "isbn", header: "Book ISBN", width: "20%" },
    { field: "version", header: "Book Version", width: "20%" },
  ];

  const columns = tableHeaders.map(({ field, header, width }) => (
    <Column
      key={field}
      field={field}
      header={header}
      style={{ width }}
      headerStyle={{ background: "white" }}
    />
  ));
  return (
    <>
      <main className="bookList-wrapper">
        <h2>Books</h2>
        <div className="searhBar-and-add-new-book">
          <div className="search-bar">
            <input type="search" 
             onChange={handleSearch}
             value={searchInput}
             placeholder="Search by title or author"
            />
          </div>
          <div className="add-new-book">

          <Link to={"/add-book"}>
          <Button>
              <span> + </span> add Book
            </Button>        </Link>
         
          </div>
        </div>
        <div className="table card">
          <DataTable
            value={filter}
            paginator
            rows={6}
            tableStyle={{ minWidth: "50rem" ,textAlign:"center",height:"20rem"}}
          >
        {columns}

            <Column
          field="id"
          header="Actions"
          body={(rowData) => (
            <ButtonsGroup rowData={rowData} />
          )}
          style={{ minWidth: "120px" ,backgroundColor:"white"}}
        ></Column>
          </DataTable>
        </div>
      </main>
    </>
  );
};
