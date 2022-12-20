import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./tiles.scss";

export enum TileKind {
  Ad,
  Primary,
  Secondary,
}

type _TileProps = {
  kind: TileKind;
  route: string;

  className?: string;

  children: ReactNode;

  [remainingProp: string]: any;
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
      case TileKind.Secondary:
        classString += " baseTile-secondary";
        break;
      case TileKind.Primary:
      default:
        classString += " baseTile-primary";
        break;
    }

    if (className) {
      classString += ` ${className}`;
    }

    return classString;
  }

  return (
    <Link to={route} className={cssClasses()} {...otherProps}>
      {children}
    </Link>
  );
}

export default BaseTile;
