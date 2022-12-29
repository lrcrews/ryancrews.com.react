import BaseTile, { TileKind } from "./BaseTile";

import awesome_skirts from "./awesome_skirts.jpg";
import original_coder from "./original_coder.jpg";

export enum AdName {
  AwesomeSkirts = "awesome_skirts",
  OriginalCoder = "original_coder",
}

// Using this as an easy hack for a "random ad" implementation.
const NAMES_ARRAY = [AdName.AwesomeSkirts, AdName.OriginalCoder];

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
  adName?: string;
};

function AdTile(props: AdTileProps) {
  const { adName } = props;

  const contentKey = adName
    ? adName
    : NAMES_ARRAY[Math.floor(Math.random() * NAMES_ARRAY.length)];

  return (
    <BaseTile
      kind={TileKind.Ad}
      route="https://sacrotees.com"
      target="_blank"
      rel="noreferrer"
    >
      <img src={AD_CONTENT[contentKey].image} alt="Visit SACROtees." />
      <p>{AD_CONTENT[contentKey].content}</p>
    </BaseTile>
  );
}

export default AdTile;
