import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";

describe("<home />", () => {
  test("it should mount", () => {
    render(<Home />);
    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();
    
  });
});
