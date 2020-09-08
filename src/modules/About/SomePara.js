import React from "react";
import "./AboutDescription/AboutDescription.scss";
import { ThemeContext } from "./context/ThemeContext";

export const SomePara = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const background = isLightTheme ? light.background : dark.background;
        const text = isLightTheme ? light.text : dark.text;
        return (
          <ul className="about-description">
            <li style={{ background: background, color: text }}>
              This way can be used in functional component
            </li>
            <li style={{ background: background, color: text }}>
              This way can be used to get multiple context
            </li>
          </ul>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SomePara;
