import React from "react";
import { ThemeContext } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";

export const ToggleTheme = () => {
  return (
    <AuthContext.Consumer>
      {(authContext) => {
        return (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { toggleAuthentication, isAuthenticated } = authContext;
              const { toggleTheme } = themeContext;
              if (isAuthenticated) {
                return [
                  <button onClick={toggleTheme} key="theme">
                    Toggle the theme
                  </button>,
                  <button onClick={toggleAuthentication} key="logout">
                    Logout
                  </button>,
                ];
              } else {
                return (
                  <button onClick={toggleAuthentication}>
                    Login to change the theme
                  </button>
                );
              }
            }}
          </ThemeContext.Consumer>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default ToggleTheme;
