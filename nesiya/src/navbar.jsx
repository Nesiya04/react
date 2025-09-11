import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      

      <header className="header">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)} style={{color:"black",fontWeight:"700"}}>
          <i className="nav-icon"><GiShoppingBag /></i>
          Happy Shoppy
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/container" className="nav-link" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/men" className="nav-link" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/kids" className="nav-link" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link to="/beauty" className="nav-link" onClick={() => setMenuOpen(false)}>Beauty</Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)} style={{fontSize:"35px"}}><FaCircleUser /></Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
