import "./addbook.scss";
import { useContext, useRef, useState } from "react";
import { BooksContext } from "../../Contexts/BooksContext";
import { Formik, Form } from "formik";
import Button from "../../components/UI/button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { FormControl } from "../../components/form-control/FormControl";

import "./addbook.scss";
export default function AddBook(props) {
  const { edit } = props;
  // call nessecary functions from the  context
  const { getBookByIdHandler, addNewBookHandler, editBookHandler } =
    useContext(BooksContext);
  //category option field data
  const categoriesOption = [
    { key: "Select an category", value: "" },
    { key: "category 1", value: "category1" },
    { key: "category 2", value: "category2" },
    { key: "category 3", value: "category3" },
  ];
  //older version option field data

  const bookOlderVirsionObtion = [
    { key: "Select an version", value: "" },
    { key: "version 1", value: "version1" },
    { key: "version 2", value: "version2" },
    { key: "version 3", value: "version3" },
  ];
  //array for data inputs
  const commonInputs = [
    {
      control: "input",
      type: "text",
      placeholder: "Book Title",
      name: "bookTitle",
    },
    {
      control: "input",
      type: "text",
      placeholder: "Book Author",
      name: "bookAuthor",
    },
    {
      control: "option",
      placeholder: "Category",
      name: "categories",
      options: categoriesOption,
    },
    {
      control: "input",
      type: "text",
      placeholder: "Price",
      name: "price",
    },
    {
      control: "input",
      type: "text",
      placeholder: "Version",
      name: "version",
    },
    {
      control: "option",
      placeholder: "Older Version",
      name: "bookOlderVersion",
      options: bookOlderVirsionObtion,
    },
    {
      control: "input",
      type: "text",
      placeholder: "Edition",
      name: "bookEdition",
    },
    {
      control: "input",
      type: "text",
      placeholder: "ISBN",
      name: "bookisbn",
    },
    {
      control: "date",
      type: "date",
      placeholder: "Release Date",
      name: "releaseDate",
    },
  ];
  //extract id from the params
  const { id } = useParams();
  const navigate = useNavigate();
  let initialValues;
  let bookData;
  //check if this edit or add new book depend on that update the table
  if (edit) {
    bookData = getBookByIdHandler(id)[0];
    initialValues = {
      bookTitle: bookData.title,
      bookAuthor: bookData.author,
      price: +bookData.price,
      version: bookData.version,
      edition: bookData.edition,
      bookisbn: bookData.isbn,
      releaseDate: parseDate(bookData.releaseDate),
      brief: bookData.brief,
      olderVersion: bookData.olderVersion,
      categories: bookData.category,
    };
  } else {
    initialValues = {
      bookTitle: "",
      bookAuthor: "",
      price: "",
      version: "",
      edition: "",
      bookisbn: "",
      releaseDate: "",
      brief: "",
      olderVersion: "",
      categories: "",
    };
  }
  //validation schema  for react formik
  const validationSchema = Yup.object({
    bookTitle: Yup.string().required("Title is Required"),
    bookAuthor: Yup.string().required("Author is Required"),
    price: Yup.number().required("Price is Required").positive().integer(),
    categories: Yup.string().required("category is Required"),
    version: Yup.string().required(" verison is Required"),
    bookOlderVersion: Yup.string().required("Required"),
    bookEdition: Yup.string().required(" Required"),
    bookisbn: Yup.string()
      .required("ISBN is required")
      .matches(
        !/^[0-9-]+$/,
        "ISBN must be between 10 and 13 digits and can only contain numbers-dashes"
      ),
    brief: Yup.string().required(" ISBN is Required"),
  });

  // submit function
  function onSubmit(values) {
    const newBook = {
      id: Math.random().toString(36).substring(2, 9),
      bookTitle: values.bookTitle,
      bookAuthor: values.bookAuthor,
      categories: values.categories,
      price: values.price,
      version: values.version,
      bookOlderVersion: values.bookOlderVersion,
      bookEdition: values.bookEdition,
      bookisbn: values.bookisbn,
      releaseDate: values.releaseDate,
      brief: values.brief,
      files: values.files,
    };

    if (edit) {
      editBookHandler(id, newBook);
    }

    addNewBookHandler(newBook);
    navigate("/books-list");
  }
  //function convert formatted date to object date
  function parseDate(dateString) {
    const parts = dateString.split("-");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
//the inputs fields renderd dynamic by passing the array inputs and 
// the form container component check which type is of input is nedeed and render it 
  return (
    <div className="addBook-container ">
      <h2>Add Book</h2>
      <div className=" card">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="form-wrapper">
            <div className="main-wrapper ">
              <div className="common-inputs-wrapper">
                {commonInputs.map((input) => (
                  <FormControl {...input} key={input.name} />
                ))}
              </div>

              <div className="diffrent-input-wrapper">
                <div className="cover-photo-wrapper ">
                  <div className="cover-photo card"></div>

                  <span>Best Diemensions for book cover image is 128*200</span>

                  <button className="upload-btn">Upload Book Cover</button>

                  <span>imageName.png</span>
                </div>
                <FormControl
                  control="textArea"
                  label="Brief"
                  name="brief"
                  rows="5"
                  cols="50"
                />

                <div className="button-wrapper">
                  <Link to={"/books-list"}>
                    <Button
                      className="submit-btn btn"
                      bgColor="rgb(236, 230, 230)"
                      color="black"
                      type="button"
                    >
                      cancel
                    </Button>
                  </Link>
                  <Button type="submit">{edit ? "update" : "save"}</Button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
