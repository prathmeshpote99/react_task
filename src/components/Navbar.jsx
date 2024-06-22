import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" activeClassName="">
          <strong>REACT</strong>
        </NavLink>

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

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/newsfeed"
              >
                <i className="bi bi-newspaper me-2"></i>
                News Feed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/find-lawyers"
              >
                <i className="bi bi-people me-2"></i>
                Find Lawyers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                <i className="bi bi-house-door me-2"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/connections"
              >
                <i className="bi bi-bezier2 me-2"></i>
                Connections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/chat">
                <i className="bi bi-chat-left-text me-2"></i>
                Chat
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <div className="d-none d-lg-flex">
            <Link className="nav-link me-3" to="/settings">
              <i className="bi bi-gear"></i>
            </Link>
            <Link className="nav-link me-3" to="/notifications">
              <i className="bi bi-bell"></i>
            </Link>
            <Link className="nav-link me-3" to="/profile">
              <i className="bi bi-person-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
