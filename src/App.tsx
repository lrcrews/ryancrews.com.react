import { useContext, useEffect, useState } from "react";

import { ThemeContext, ThemeProvider } from "./themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  const [systemTheme, setSystemTheme] = useState("light");

  const { themeName, setThemeName } = useContext(ThemeContext);

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
