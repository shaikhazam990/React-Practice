import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="navbar__logo">
        <Link to="/">MyApp</Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;