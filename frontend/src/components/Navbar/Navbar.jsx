import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import { IoBook } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b><IoBook /> TO-DO</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/todo">
                ToDo
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active btn-nav" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active btn-nav" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active btn-nav" to="/logout">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
