import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  const { getAllByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const expected = [
    { link: "/", text: "React Functional Component" },
    { link: "/contact-us", text: "Controlled Form Elements" },
    { link: "/about", text: "Context" },
    { link: "/error-boundary", text: "Error Boundary" },
    { link: "/portals", text: "Portals" },
    { link: "/use-reducer-hook", text: "Use Reducer Hooks" },
  ];

  const links = getAllByTestId("route-links").map((item) => {
    return {
      link: item.querySelector("a").getAttribute("href"),
      text: item.textContent,
    };
  });

  expect(links).toEqual(expected);
});
