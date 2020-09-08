import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  const getLinks = () => {
    return (
      <React.Fragment>
        <li>
          <Link to="/">React Functional Component</Link>
        </li>
        <li>
          <Link to="/contact-us">Controlled Form Elements</Link>
        </li>
        <li>
          <Link to="/about">Context</Link>
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
