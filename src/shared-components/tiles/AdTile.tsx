import BaseTile, { TileKind } from "./BaseTile";

import atomic_a_programmer from "./atomic_a_programmer.png";
import atomic_will_write_something from "./atomic_will_write_something.png";

export enum AdName {
  AtomicAProgrammer = "atomic_a_programmer",
  AtomicWillWriteSomething = "atomic_will_write_something",
}

// Using this as an easy hack for a "random ad" implementation.
const NAMES_ARRAY = [AdName.AtomicAProgrammer, AdName.AtomicWillWriteSomething];

const AD_CONTENT: { [key: string]: { content: string; image: string } } = {
  atomic_a_programmer: {
    content: "I just stare at my screen, but it looks like I'm working.",
    image: atomic_a_programmer,
  },
  atomic_will_write_something: {
    content: "Words will appear here... Eventually.",
    image: atomic_will_write_something,
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
      route="http://ryancrews.com"
      target="_blank"
      rel="noreferrer"
    >
      <img src={AD_CONTENT[contentKey].image} alt="Buy my book, please!" />
      <p>{AD_CONTENT[contentKey].content}</p>
    </BaseTile>
  );
}

export default AdTile;
