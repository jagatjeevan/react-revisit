import React from "react";
import { ThemeContext } from "./context/ThemeContext";

export const ToggleTheme = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { toggleTheme } = context;
        return <button onClick={toggleTheme}>Toggle the theme</button>;
      }}
    </ThemeContext.Consumer>
  );
};

export default ToggleTheme;
