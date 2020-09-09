import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const ContextHook = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
};
