import code from "./markus-spiske-MgtHZ4zlC1U-unsplash.jpg";

import "./CodeTiles.scss";
import { Link } from "react-router-dom";
import { ABOUT_PATH } from "../../../routes/routes";

export default function CodeTiles() {
  return (
    <div className="tileContainer tileContainer-withPrimary">
      <div className="tileContainer--primary">
        <Link to={ABOUT_PATH} className="baseTile baseTile-primary">
          <img src={code} className="code-link-image" alt="meaningless code." />
          <div className="code-link-text">GoTo Code</div>
        </Link>
        <div className="small-label u-textAlignCentered">
          Photo by{" "}
          <a
            href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Markus Spiske
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </div>
      </div>
      <div className="tileContainer--secondary tileContainer">
        <div className="baseTile baseTile-secondary">Secondary Tile</div>
        <div className="baseTile baseTile-secondary">Secondary Tile</div>
        <div className="baseTile baseTile-ad">Ad Tile</div>
        <div className="baseTile baseTile-secondary">Secondary Tile</div>
      </div>
    </div>
  );
}
