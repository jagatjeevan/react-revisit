import React, { Component } from "react";

export const ThemeContext = React.createContext();
export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    dark: {
      background: "#333",
      text: "#fff",
    },
    light: {
      background: "#ededed",
      text: "#333",
    },
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
