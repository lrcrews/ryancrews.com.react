import { ChangeEvent, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { CookModeContext } from "../../cook-mode";
import {
  ABOUT_PATH,
  FOOD_HOME_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
} from "../../routes/paths";
import { ThemeContext } from "../../themes";

import "./SiteFooter.scss";

function SiteFooter() {
  const { themeName, setThemeName } = useContext(ThemeContext);
  const { isCookModeEnabled, isSupported, setCookModeEnabled } =
    useContext(CookModeContext);
  const location = useLocation();

  const isRecipePage =
    location.pathname !== FOOD_HOME_PATH &&
    location.pathname.startsWith(`${FOOD_HOME_PATH}/`);

  useEffect(() => {
    setCookModeEnabled(isRecipePage);
  }, [isRecipePage, setCookModeEnabled]);

  function handleThemeChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setThemeName(value);
  }

  function handleCookModeChange(event: ChangeEvent<HTMLInputElement>) {
    setCookModeEnabled(event.target.checked);
  }

  return (
    <footer id="site-footer">
      <div className="about-links">
        <Link to={ABOUT_PATH}>About</Link> | <Link to={TERMS_PATH}>Terms</Link>{" "}
        | <Link to={PRIVACY_PATH}>Privacy Policy</Link>
      </div>
      <div className="footer-controls">
        <label
          className="cook-mode-toggle"
          title={
            isSupported
              ? undefined
              : "Cook mode is unavailable in this browser."
          }
        >
          <input
            type="checkbox"
            checked={isCookModeEnabled}
            disabled={!isSupported}
            onChange={handleCookModeChange}
          />{" "}
          Cook mode
        </label>
        <div className="theme-switcher">
          <span className="small-label">Theme: </span>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={themeName === "light"}
              onChange={handleThemeChange}
            />{" "}
            Light
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={themeName === "dark"}
              onChange={handleThemeChange}
            />{" "}
            Dark
          </label>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
