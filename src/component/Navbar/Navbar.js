import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import  './NavBar.scss'


function Navbar() {

  const {info} = useContext(ThemeContext)
  return (
    <nav className="nav-box">
      <h1 className="title">{info.name}</h1>
    </nav>
  );
}
export default Navbar;
