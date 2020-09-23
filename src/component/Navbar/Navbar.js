import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";


function Navbar() {

  const {info} = useContext(ThemeContext)
  return (
    <nav>
      <h1>{info.name}</h1>
    </nav>
  );
}
export default Navbar;
