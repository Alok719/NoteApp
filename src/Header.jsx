import React from "react";
import logo from "./Images/note.jpg";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="100" height="100" />
        <h1>Alok Keep</h1>
      </div>
    </>
  );
};
export default Header;
