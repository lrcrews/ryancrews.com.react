import BaseTile, { TileKind } from "./BaseTile";

import original_coder from "./original_coder_227x260.png";

export enum AdName {
  GeekyShirts = "geeky_shirts",
  OriginalCoder = "original_coder",
}

const AD_CONTENT: { [key: string]: { content: string; image: string } } = {
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
