import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/attachments/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="site-header">
        <Link className="site-logo" to="/home">
          <img src={logo} alt="" />
        </Link>
        <Link className="primary-menu-item" to="/home">
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link className="primary-menu-item" to="/about">
          About
        </Link>
        <Link className="primary-menu-item" to="/menu">
          Menu
        </Link>
        <Link className="primary-menu-item" to="/gallery">
          Gallery
        </Link>
        <Link className="primary-menu-item" to="/about">
          About
        </Link>
        <Link className="primary-menu-item" to="/contact">
          Contact
        </Link>
      </nav>
    );
  }
}

export default Navbar;
