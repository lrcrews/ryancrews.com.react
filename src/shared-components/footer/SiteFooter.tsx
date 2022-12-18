import { ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";

import { ABOUT_PATH } from "../../routes/routes";
import { ThemeContext } from "../../themes";

import "./SiteFooter.scss";

export default function SiteFooter() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setThemeName(value);
  }

  return (
    <footer id="site-footer">
      <div className="about-link">
        <Link to={ABOUT_PATH}>About</Link>
      </div>
      <div className="theme-switcher">
        Theme:{" "}
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
