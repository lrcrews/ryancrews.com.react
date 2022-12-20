import { ReactNode } from "react";

import "./tiles.scss";

interface TileContainerProps {
  className?: string;
  withImageTile?: boolean;

  children: ReactNode;
}

function TileContainer(props: TileContainerProps) {
  const { className = "", withImageTile = false, children } = props;

  function cssClasses() {
    let classString = "tileContainer";

    if (withImageTile) {
      classString += " tileContainer-withImage";
    }

    if (className) {
      classString += ` ${className}`;
    }

    return classString;
  }

  return <div className={cssClasses()}>{children}</div>;
}

export default TileContainer;
