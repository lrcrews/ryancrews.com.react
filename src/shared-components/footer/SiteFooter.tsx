import { ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";

import { ABOUT_PATH, PRIVACY_PATH, TERMS_PATH } from "../../routes/routes";
import { ThemeContext } from "../../themes";

import "./SiteFooter.scss";

function SiteFooter() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setThemeName(value);
  }

  return (
    <footer id="site-footer">
      <div className="about-links">
        <Link to={ABOUT_PATH}>About</Link> | <Link to={TERMS_PATH}>Terms</Link>{" "}
        | <Link to={PRIVACY_PATH}>Privacy Policy</Link>
      </div>
      <div className="theme-switcher">
        <span className="small-label">Theme: </span>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={themeName === "light"}
            onChange={handleChange}
          />{" "}
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={themeName === "dark"}
            onChange={handleChange}
          />{" "}
          Dark
        </label>
      </div>
    </footer>
  );
}

export default SiteFooter;
