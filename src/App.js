import React from "react";
import AppNavbar from "./components/AppNavbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AppNavbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
