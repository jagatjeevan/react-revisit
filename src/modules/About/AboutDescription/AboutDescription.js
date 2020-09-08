import React, { Component } from "react";
import "./AboutDescription.scss";
import { ThemeContext } from "../context/ThemeContext";

export class AboutDescription extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const background = isLightTheme ? light.background : dark.background;
    const text = isLightTheme ? light.text : dark.text;
    return (
      <div
        className="about-description"
        data-testid="AboutDescription"
        style={{ background: background, color: text }}
      >
        AboutDescription Component. Using this type would not be possible in
        functional compoennt.
      </div>
    );
  }
}

export default AboutDescription;
