import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class AppNavbar extends Component {
  // Set the context type and the context which we want to consume
  static contextType = ThemeContext;

  render() {
    console.log(this.context); // Access to the shared data on this.context
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context Application</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default AppNavbar;
