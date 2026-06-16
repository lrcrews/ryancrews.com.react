import React from "react";

export interface CookModeContextProps {
  isCookModeEnabled: boolean;
  isSupported: boolean;
  setCookModeEnabled: (isEnabled: boolean) => void;
}

const CookModeContext = React.createContext<CookModeContextProps>({
  isCookModeEnabled: false,
  isSupported: false,
  setCookModeEnabled: () => undefined,
});

export default CookModeContext;
