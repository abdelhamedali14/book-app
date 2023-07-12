import "./header.scss";
import { Card } from "../../components/UI/card/Card";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
export default function Header() {
  const [dropDownVisibility, setDropdownVisibility] = useState(false);
  const Auth = useContext(AuthContext)
  const logOutHandler = () => {
    Auth.onLogout()
  }
  const toggleDropdown = () => {
    setDropdownVisibility((prev) => {
      return !prev;
    });
  };
  
  return (
  <>  <header className="header-wrapper">
  <h2>Acore admin dashboard</h2>
  <div className="dropdown"> 
    <button className="dropdown-btn" onClick={toggleDropdown}>
      Super Admin
    </button>
    <div
      className={`drop-down-option ${dropDownVisibility ? "show" : ""}`} 
    >
      <p>admin@example.com</p>
      <button onClick={logOutHandler}>Logout</button>
    </div>
  </div>
</header>

</>
  );
}