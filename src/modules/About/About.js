import React from "react";
import AboutDescription from "./AboutDescription/AboutDescription";
import "./About.scss";
import ThemeContextProvider from "./context/ThemeContext";
import SomePara from "./SomePara";

const About = () => {
  return (
    <ThemeContextProvider>
      <div className="About" data-testid="About">
        <SomePara />
        <AboutDescription />
      </div>
    </ThemeContextProvider>
  );
};

export default About;
