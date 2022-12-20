import { Link } from "react-router-dom";

import { HOME_PATH } from "../../routes/routes";

import logo from "./logo40h.png";

import "./SiteHeader.scss";

function SiteHeader() {
  return (
    <header id="site-header">
      <Link to={HOME_PATH} className="logo">
        <img src={logo} alt="Logo, click to go to home page." />
      </Link>
      <ul className="links">
        <li>foo</li>
        <li>bar</li>
      </ul>
    </header>
  );
}

export default SiteHeader;
