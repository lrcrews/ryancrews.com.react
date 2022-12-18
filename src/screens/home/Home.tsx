import { useContext } from "react";
import { Link } from "react-router-dom";

import { SiteFooter, SiteHeader } from "../../shared-components";
import { ThemeContext } from "../../themes";

import logo from "./logo.svg";

import "./Home.scss";

export default function HomeScreen() {
  const { themeName } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeName}`}>
      <SiteHeader />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/about">About Page</Link>
      </main>
      <SiteFooter />
    </div>
  );
}
