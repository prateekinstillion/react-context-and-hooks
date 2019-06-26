import React, { Fragment, Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <Fragment>
        <button onClick={toggleTheme}>Toggle the theme</button>
      </Fragment>
    );
  }
}

export default ThemeToggle;
