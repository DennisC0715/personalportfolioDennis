import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const sideButtonRef = useRef(null);
  const linkRef = useRef(null);

  const toggleButton = () => {
    sideButtonRef.current.style.transform = `${
      showLinks ? "" : "rotate(90deg)"
    }`;
  };

  const toggleLink = () => {
    linkRef.current.style.display = `${showLinks ? "block" : ""}`;
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <div className="nav-sidebar">
            <button
              ref={sideButtonRef}
              className="sideBtn"
              onClick={() => {
                setShowLinks(!showLinks);
                toggleLink();
                toggleButton();
              }}
            >
              <ImMenu />
            </button>
          </div>
          <div className="nav-title">
            <Link to="/">
              <h3>Hi, I'm Dennis Chen</h3>
            </Link>
          </div>
        </div>
        <div className="link-container">
          <ul className="nav-links" ref={linkRef}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
