import logo from "./logo.svg";

import "./Home.scss";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/about">About Page</Link>
      </header>
    </div>
  );
}
