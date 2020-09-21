import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loading from "./loading";

describe("Loading Component", () => {
  afterEach(cleanup);

  test("it should mount", () => {
    render(<Loading />);
    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  test("takes a snapshot", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment(<Loading />)).toMatchSnapshot();
  });
});
