import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  const getLinks = () => {
    return (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </React.Fragment>
    );
  };

  return (
    <nav>
      <ul>{getLinks()}</ul>
    </nav>
  );
}
