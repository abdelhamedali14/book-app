import "./addbook.scss";
import { useContext, useRef, useState } from "react";
import { BooksContext } from "../../Contexts/BooksContext";
import { Formik, Form } from "formik";
import Button from "../../components/UI/button/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { FormControl } from "../../components/form-control/FormControl";

import "./addbook.scss";
export default function AddBook() {
  const fileRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);

  const { addNewBookHandler } = useContext(BooksContext);

  const categoriesOption = [
    { key: "Select an category", value: "" },
    { key: "category 1", value: "category1" },
    { key: "category 2", value: "category2" },
    { key: "category 3", value: "category3" },
  ];
  const bookOlderVirsionObtion = [
    { key: "Select an version", value: "" },
    { key: "version 1", value: "version1" },
    { key: "version 2", value: "version2" },
    { key: "version 3", value: "version3" },
  ];
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
  const initialValues = {
    bookTitle: "",
    bookAuthor: "",
    categories: "",
    price: "",
    version: "",
    bookOlderVersion: "",
    bookEdition: "",
    bookisbn: "",
    releaseDate: new Date(),
    brief: "",
    files: "",
  };
  const validationSchema = Yup.object({
    bookTitle: Yup.string().required(" Title is Required"),
    bookAuthor: Yup.string().required("Author is Required"),
    price: Yup.string().required(" Price is Required"),
    categories: Yup.string().required(" category is Required"),
    version: Yup.string().required(" category is Required"),
    bookEdition: Yup.string().required("Required"),
    bookisbn: Yup.string().required(" ISBN is Required"),
    brief: Yup.string().required(" ISBN is Required"),
    // files: Yup.string().required("cdzscs"),
  });

  function onSubmit(values) {
    if (values) {
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
      addNewBookHandler(newBook);
      setIsSaved(true);
    }
  }

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
                  <Link to={"/books-list"}>
                    <Button type="submit">save</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
