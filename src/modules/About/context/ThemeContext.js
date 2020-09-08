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

  toggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
