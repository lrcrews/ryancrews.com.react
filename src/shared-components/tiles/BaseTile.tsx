import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./tiles.scss";

export enum TileKind {
  Ad,
  FullImage,
}

type _TileProps = {
  route: string;

  className?: string;
  kind?: TileKind;

  children: ReactNode;

  [otherProps: string]: any;
};

export type TileProps = _TileProps & HTMLAttributes<HTMLAnchorElement>;

function BaseTile(props: TileProps) {
  const { kind, route, className = undefined, children, ...otherProps } = props;

  function cssClasses() {
    let classString = "baseTile";

    switch (kind) {
      case TileKind.Ad:
        classString += " baseTile-ad";
        break;
      case TileKind.FullImage:
        classString += " baseTile-fullImage";
        break;
    }

    if (className) {
      classString += ` ${className}`;
    }

    return classString;
  }

  return kind === TileKind.Ad ? (
    <a href={route} className={cssClasses()} {...otherProps}>
      {children}
    </a>
  ) : (
    <Link to={route} className={cssClasses()} {...otherProps}>
      {children}
    </Link>
  );
}

export default BaseTile;
