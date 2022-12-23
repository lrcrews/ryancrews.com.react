import BaseTile, { TileKind } from "./BaseTile";

import awesome_skirts from "./awesome_skirts.jpg";
import original_coder from "./original_coder.jpg";

export enum AdName {
  AwesomeSkirts = "awesome_skirts",
  GeekyShirts = "geeky_shirts",
  OriginalCoder = "original_coder",
}

const AD_CONTENT: { [key: string]: { content: string; image: string } } = {
  awesome_skirts: {
    content: "Stylish skirts!",
    image: awesome_skirts,
  },
  original_coder: {
    content: "Shirts for coders!",
    image: original_coder,
  },
};

type AdTileProps = {
  adName: string;
};

function AdTile(props: AdTileProps) {
  const { adName } = props;

  return (
    <BaseTile
      kind={TileKind.Ad}
      route="https://sacrotees.com"
      target="_blank"
      rel="noreferrer"
    >
      <img src={AD_CONTENT[adName].image} alt="Visit SACROtees." />
      <p>{AD_CONTENT[adName].content}</p>
    </BaseTile>
  );
}

export default AdTile;
