import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-scrolled fixed-top bg-body-tertiary bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3>Srijan Kumar</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a
                className="nav-link active"
                href="https://drive.google.com/file/d/13oSe2fPAXA8be9E_QuMnmtAC7UaL0dh1/view?usp=sharing"
              >
                Resume
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
