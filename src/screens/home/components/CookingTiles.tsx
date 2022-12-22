import { ABOUT_PATH } from "../../../routes/routes";
import {
  AdName,
  AdTile,
  BaseTile,
  FullImageTile,
  TileContainer,
} from "../../../shared-components";

import cooking from "./cooking.jpg";

import "./CookingTiles.scss";

function CookingTiles() {
  return (
    <TileContainer withImageTileHorizontal>
      <div className="tileContainer--image">
        <FullImageTile route={ABOUT_PATH}>
          <img
            src={cooking}
            className="cooking-link-image"
            alt="it's cooking!"
          />
          <div className="code-link-text">GoTo Cooking</div>
        </FullImageTile>
        <div className="small-label u-textAlignCentered">
          Photo by{" "}
          <a
            href="https://unsplash.com/@johnny_legrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            John Legrand
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/s/photos/cooking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </div>
      </div>
      <TileContainer className="tileContainer--content">
        <BaseTile route={ABOUT_PATH}>
          <div className="label">Recipes!</div>
          <p>
            ...and just recipes, no stories, no videos, no preamble, just one
            non-video ad for cool clothes and the recipe 👨‍🍳
          </p>
          <p>
            Mostly for my own sanity, as wanting to toss hot oil at the people
            who run recipe sites feels like an unhealthy emotion stemming from
            the initial frustration at the slow load time, through the annoying
            jumping around of the recipe due to changing ads, past the heartfelt
            story of how the recipe impacted the authors life, and culminating
            with the site trying to block me from seeing the recipe again this
            month unless I sign in 🤬
          </p>
        </BaseTile>
        <AdTile adName={AdName.OriginalCoder} />
      </TileContainer>
    </TileContainer>
  );
}

export default CookingTiles;
