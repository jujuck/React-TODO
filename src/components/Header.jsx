import React from "react";
import logo from "../assets/todo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo de ma to do list" />
      <div>
        <h1>LISTE à faire</h1>
      </div>
    </header>
  );
}

export default Header;
