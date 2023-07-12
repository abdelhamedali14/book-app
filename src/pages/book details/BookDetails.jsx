import {useContext} from 'react'
import { BooksContext } from '../../Contexts/BooksContext'
import { useParams, useNavigate, Link } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";
 import  {Card}   from "../../components/UI/card/Card"
 import  Button  from "../../components/UI/button/Button"

 import "./bookdetails.scss"

 import photo  from "../../assets/images/dead.jpg"

export default function BookDetails() {
  const { getBookByIdHandler, editBookHandler } = useContext(BooksContext);
  const { id } = useParams();

  const [bookDetails] = getBookByIdHandler(id);
  console.log(bookDetails);
  const navigate = useNavigate();

  const accept = () => {
    editBookHandler(id);
    navigate("/books-list");
  };
  const reject = () => {};

  const deleteConfirm = () => {
    confirmDialog({
      id: Math.random(),
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptclassNameName: "p-button-danger",
      accept,
      reject,
    });
  };

  return (
    <section className='details-wrapper'>
       <h1>Book Details</h1>

 <Card className="details">

  <div className="upper-content">
    <img className="cover" src={photo} alt="book cover" />
    <div className="details-grp-1">
      <h3 className="book-name">{bookDetails.title}</h3>
      <div className="book-detail-container">
        <div className="book-detail">
          <p>478</p>
          <p>pages</p>
        </div>
        <div className="book-detail">
          <p>20h</p>
          <p>To read</p>
        </div>
      </div>
    </div>
    <div className="actions">
      <Button className="delete" color="white"bgColor="rgb(204, 57, 57)" onClick={deleteConfirm}>
        Delete
      </Button>
      <Link to={`/edit-book/${id}`}>
        <Button className="edit">Edit</Button>
      </Link>
    </div>
  </div>
  <div className="lower-content">
    <div>
      <p className="name-release">
        <span>By {bookDetails.author}</span>
        <span>|</span>
        <span>{bookDetails.releaseDate}</span>
      </p>
      <p className="price">$ {bookDetails.price}</p>
      <p>ISBN: {bookDetails.isbn}</p>
      <p>Version: {bookDetails.version}</p>
      <p>
        <span className="category">{bookDetails.category}</span>
      </p>
    </div>
    <div>
      <h3>Brief</h3>
      <p className='brief'>{bookDetails.brief}</p>
    </div>
  </div>
</Card>
    </section>
  );
}
