import "./sidebar.scss";
import { FaChevronLeft } from "react-icons/fa";

import { FaBook } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
export default function SideBar() {
  return (
    <aside className="sideBar-wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
        <FaChevronLeft size={20} />

      </div>
      <div className="books">
      <FaBook size={20} />
        <h4>Books</h4>
 


      </div>
    </aside>
  );
}
