import React from "react";
import AboutDescription from "./AboutDescription/AboutDescription";
import "./About.scss";
import ThemeContextProvider from "./context/ThemeContext";
import SomePara from "./SomePara";
import ToggleTheme from "./ToggleTheme";
import { AuthContextProvider } from "./context/AuthContext";
import { ContextHook } from "./ContextHook";

const About = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <ContextHook />
        <SomePara />
        <AboutDescription />
        <ToggleTheme />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default About;
