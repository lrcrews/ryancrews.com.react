import { ReactNode } from "react";

import "./tiles.scss";

interface TileContainerProps {
  className?: string;
  withImageTile?: boolean;
  withImageTileHorizontal?: boolean;

  children: ReactNode;
}

function TileContainer(props: TileContainerProps) {
  const {
    className = "",
    withImageTile = false,
    withImageTileHorizontal = false,
    children,
  } = props;

  function cssClasses() {
    let classString = "tileContainer";

    if (withImageTile) {
      classString += " tileContainer-withImage";
    }

    if (withImageTileHorizontal) {
      // lazy hack, not enforcing `withImageTile` be true if this true, so adding both
      // classes here, which may cause a duplicate class.
      classString +=
        " tileContainer-withImage tileContainer-withImage-horizontal";
    }

    if (className) {
      classString += ` ${className}`;
    }

    return classString;
  }

  return <div className={cssClasses()}>{children}</div>;
}

export default TileContainer;
