import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">BugHunter</h1>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
