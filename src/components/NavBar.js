import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import searchIcon from "../media/icon-search.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="nav-bar-logo">
        <div className="nav-bar-logo-item">logo</div>
      </section>
      <section className="nav-bar-menu-list">
        <div className="nav-bar-menu-item">
          <Link className="nav-bar-menu-item-link">Dog map</Link>
        </div>
        <div className="nav-bar-menu-item">
          <Link className="nav-bar-menu-item-link">Calendar</Link>
        </div>
        <div className="nav-bar-menu-item">
          <Link className="nav-bar-menu-item-link">Play date</Link>
        </div>
        <form className="nav-bar-menu-item-search">
          <div>
            {" "}
            <input placeholder="Search" className="nav-bar-item-input"></input>
            <button>
              <img
                className="nav-bar-search-icon"
                src={searchIcon}
                alt="searchicon"
              />
            </button>
          </div>
        </form>
      </section>
      <section className="nav-bar-item-person">
        <div className="nav-bar-item-person-icon">me</div>
      </section>
    </nav>
  );
};

export default NavBar;
