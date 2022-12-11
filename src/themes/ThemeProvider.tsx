import { PropsWithChildren, useEffect, useState } from "react";

import ThemeContext from "./ThemeContext";

interface ThemeProps extends PropsWithChildren<{}> {
  themeName: string;
}

function ThemeProvider({ themeName: defaultTheme, children }: ThemeProps) {
  const [themeName, setThemeName] = useState(defaultTheme);

  useEffect(() => {
    setThemeName(defaultTheme);
  }, [defaultTheme]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
