import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/nowplay">Now Playing</Link>
        </li>
        <li>
          <Link to="/candy">Concession</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
