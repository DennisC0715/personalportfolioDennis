import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiAsana } from "react-icons/si";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [theme, setTheme] = useState("light-mode");
  const sideButtonRef = useRef(null);
  const linkRef = useRef(null);
  const linkContainerRef = useRef(null);

  const toggleButton = () => {
    sideButtonRef.current.style.transform = `${
      showLinks ? "" : "rotate(180deg)"
    }`;
  };

  const mode = theme === "light-mode" ? "Dark Mode" : "Light Mode";

  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

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
                toggleButton();
              }}
            >
              <SiAsana />
            </button>
          </div>
          <div className="nav-title">
            <h3>
              <Link to="/">Hi, I'm Dennis Chen </Link>
              <button className="mode-button" onClick={toggleTheme}>
                {mode}
                <span>
                  {theme === "light-mode" ? <BsSunFill /> : <BsMoonFill />}
                </span>
              </button>
            </h3>
          </div>
        </div>
        <div className="link-container" ref={linkContainerRef}>
          <ul className="nav-links" ref={linkRef}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
