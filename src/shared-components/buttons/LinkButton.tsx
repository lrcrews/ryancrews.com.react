// A `Link` that looks like a button

import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ButtonKind } from "./BaseButton";

import "./buttons.scss";

type LinkButtonProps = {
  kind: ButtonKind;
  route: string;

  className?: string;

  children: ReactNode;

  [remainingProp: string]: any;
};

function PrimaryButton(props: LinkButtonProps) {
  const { kind, route, className, children, ...otherProps } = props;

  function cssClasses() {
    let classString = "baseButton";

    switch (kind) {
      case ButtonKind.Secondary:
        classString += " baseButton-secondary";
        break;
      case ButtonKind.Primary:
      default:
        classString += " baseButton-primary";
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

export default PrimaryButton;
