import "./sidebar.scss"

import logo   from "../../assets/images/logo.png"
export default function SideBar() {
  return (
    <aside className="sideBar-wrapper">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="books">

            <h4>Books</h4>
        </div>




    </aside>
  )
}
