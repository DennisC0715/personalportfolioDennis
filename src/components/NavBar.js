import React from "react";
import { Link } from "react-router-dom";
import 

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-sidebar"></div>
      <div className="nav-title">
        <Link to="/">
          <h3>Hi, I'm Dennis Chen</h3>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
      </div>
    </nav>
  );
};

export default NavBar;
