import {useContext} from 'react'
import { Link } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";
import { BooksContext } from '../../Contexts/BooksContext';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css"
import "./buttonGroups.scss"
export default function ButtonsGroup(props) {
  const {deleteBookHandler}=useContext(BooksContext)
  const {id }=props.rowData
 const handleDeleteConfirm =()=>{
  console.log( id);
  confirmDialog({
    id: props.rowData.id,
    message: "Do you want to delete this record?",
    header: "Delete Confirmation",
    icon: "pi pi-info-circle",
    acceptClassName: "p-button-danger",
    accept: () => deleteBookHandler(id),
  });
  console.log(id);

 }
  return (
    <div className="buttons-container">
      <Link to={`/book-details/${props.rowData.id}`}>
        <button className="actions-button">
          <i className="pi pi-eye eye-icon"></i>
        </button>
      </Link>
      <Link to={`/edit-book/${props.rowData.id}`}>
        <button className="actions-button">
          <i className="pi pi-pencil pencil-icon"></i>
        </button>
      </Link>
      <button className="actions-button" onClick={handleDeleteConfirm}>
        <i className="pi pi-trash trash-icon"></i>
      </button>
    </div>
  );
}

