import { useEffect, useState } from "react";

import { ThemeProvider } from "./themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

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
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
