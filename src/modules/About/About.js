import React from "react";
import AboutDescription from "./AboutDescription/AboutDescription";
import "./About.scss";
import ThemeContextProvider from "./context/ThemeContext";
import SomePara from "./SomePara";
import ToggleTheme from "./ToggleTheme";

const About = () => {
  return (
    <ThemeContextProvider>
      <SomePara />
      <AboutDescription />
      <ToggleTheme />
    </ThemeContextProvider>
  );
};

export default About;
