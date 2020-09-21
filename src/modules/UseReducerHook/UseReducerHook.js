import React, { useReducer } from "react";
import { init, reducer } from "./reducer";
import "./UseReducerHook.scss";

export const ChildComponent = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, () =>
    init(initialCount)
  );
  return (
    <div data-testid="child-component">
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

const UseReducerHook = () => {
  return (
    <div data-testid="reducer-component">
      <ChildComponent initialCount="1" />
    </div>
  );
};

export default UseReducerHook;
