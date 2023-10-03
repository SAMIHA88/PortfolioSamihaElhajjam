import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
