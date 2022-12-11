import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { ThemeProvider } from "./themes";

function App() {
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        setSystemTheme(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    setSystemTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <ThemeProvider themeName={systemTheme}>
      <div className={`App theme-${systemTheme}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
