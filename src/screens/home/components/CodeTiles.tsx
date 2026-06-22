import {
  CODE_HOME_PATH,
  POSTS_HOME_PATH,
  USEFUL_TOOLS_AND_CODE_HOME_PATH,
} from "../../../routes/paths";
import {
  AdName,
  AdTile,
  BaseTile,
  FullImageTile,
  TileContainer,
} from "../../../shared-components";

import code from "./markus-spiske-MgtHZ4zlC1U-unsplash.jpg";

import "./CodeTiles.scss";

function CodeTiles() {
  return (
    <TileContainer withImageTile>
      <div className="tileContainer--image">
        <FullImageTile route={CODE_HOME_PATH}>
          <img src={code} className="code-link-image" alt="meaningless code." />
          <div className="code-link-text">GoTo Code</div>
        </FullImageTile>
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
      <TileContainer className="tileContainer--content">
        <BaseTile route={POSTS_HOME_PATH}>
          <div className="label">Blog Posts</div>
          <p>
            My thoughts on things related to programming, working in the
            industry, interesting code patterns, and other loosely related
            topics 📝
          </p>
        </BaseTile>
        <AdTile adName={AdName.AtomicAProgrammer} />
        <BaseTile route={USEFUL_TOOLS_AND_CODE_HOME_PATH}>
          <div className="label">Useful Tools & Code</div>
          <p>
            A collection of useful tools and code snippets to help with
            development 🛠
          </p>
        </BaseTile>
      </TileContainer>
    </TileContainer>
  );
}

export default CodeTiles;
