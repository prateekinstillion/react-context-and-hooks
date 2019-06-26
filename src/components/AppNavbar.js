import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class AppNavbar extends Component {
  // Set the context type and the context which we want to consume

  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { toggleAuthentication, isAuthenticated } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context Application</h1>
                  <div
                    onClick={toggleAuthentication}
                    style={{ cursor: "pointer" }}
                  >
                    {isAuthenticated ? "Logged In" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default AppNavbar;
