import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      <button onClick={toggleTheme}>Toggle the theme</button>
    </Fragment>
  );
};

export default ThemeToggle;
