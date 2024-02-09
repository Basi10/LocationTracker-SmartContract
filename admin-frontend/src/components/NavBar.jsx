import React, { useState } from "react";
import CreateEmployee from "./CreateEmployee";

function MiddleContent({ activeLink }) {
  return (
    <div className="middle-content">
      {activeLink === "about" && <CreateEmployee />}
      {activeLink === "contact" && <h1>Hello Content</h1>}
    </div>
  );
}

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Admin Page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + (activeLink === "about" ? "active" : "")}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </a>
              </li>
              <li className={"nav-item " + (activeLink === "contact" ? "active" : "")}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MiddleContent activeLink={activeLink} />
    </div>
  );
}

export default NavBar;
