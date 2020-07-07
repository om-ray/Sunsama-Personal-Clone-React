import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  let linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav className="Nav_bar">
      <Link style={linkStyle} to="/">
        <h1 className="Logo">Sunsama Personal Clone</h1>
      </Link>
      <ul className="Nav_links">
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={linkStyle} to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
