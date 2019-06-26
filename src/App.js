import React from "react";
import AppNavbar from "./components/AppNavbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AppNavbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
