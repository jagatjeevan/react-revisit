import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const linksArr = [
    { id: "link-1", link: "/", text: "React Functional Component" },
    { id: "link-2", link: "/contact-us", text: "Controlled Form Elements" },
    { id: "link-3", link: "/about", text: "Context" },
    { id: "link-4", link: "/error-boundary", text: "Error Boundary" },
    { id: "link-5", link: "/portals", text: "Portals" },
    { id: "link-6", link: "/use-reducer-hook", text: "Use Reducer Hooks" },
  ];

  const getLinks = () => {
    return linksArr.map((link) => (
      <li key={link["id"]} data-testid="route-links">
        <Link to={link.link}>{link.text}</Link>
      </li>
    ));
  };

  return (
    <nav>
      <ul>{getLinks()}</ul>
    </nav>
  );
}
