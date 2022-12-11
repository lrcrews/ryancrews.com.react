import React from "react";

interface ThemeContextProps {
  themeName: string;
  setThemeName: (themeName: string) => void;
}

const ThemeContext = React.createContext({} as ThemeContextProps);

export default ThemeContext;
