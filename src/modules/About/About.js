import React from "react";
import AboutDescription from "./AboutDescription/AboutDescription";
import "./About.scss";
import ThemeContextProvider from "./context/ThemeContext";

const About = () => {
  return (
    <ThemeContextProvider>
      <div className="About" data-testid="About">
        About Component
        <AboutDescription />
      </div>
    </ThemeContextProvider>
  );
};

export default About;
