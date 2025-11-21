import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/popular">Popular</a>
        </li>
        <li>
          <a href="/nowplay">Now Playing</a>
        </li>
        <li>
          <a href="/candy">Concession</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
