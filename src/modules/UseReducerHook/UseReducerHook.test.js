import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UseReducerHook, { ChildComponent } from "./UseReducerHook";
import { init, reducer } from "./reducer";

describe("initial State", () => {
  test("init", () => {
    expect(init(1)).toEqual({ count: 1 });
    expect(init(2)).toEqual({ count: 2 });
    expect(init(3)).toEqual({ count: 3 });
  });
});

describe("reducer", () => {
  test("default and reset", () => {
    const action = { a: 1, payload: 1 };
    const state = { count: 2 };
    expect(reducer(state, action)).toEqual({ count: 1 });
  });

  test("increment", () => {
    const action = { type: "increment" };
    const state = { count: 2 };
    expect(reducer(state, action)).toEqual({ count: 3 });
  });

  test("decrement", () => {
    const action = { type: "decrement" };
    const state = { count: 5 };
    expect(reducer(state, action)).toEqual({ count: 4 });
  });
});
