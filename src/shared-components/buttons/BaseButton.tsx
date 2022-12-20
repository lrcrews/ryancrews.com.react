import {
  ButtonHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

import "./buttons.scss";

export enum ButtonKind {
  Primary,
  Secondary,
}

type _ButtonProps = {
  kind: ButtonKind;
  onClick:
    | KeyboardEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLButtonElement>;

  className?: string;
  isSubmit?: boolean;

  children: ReactNode;

  [otherProps: string]: any;
};

export type ButtonProps = _ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

function BaseButton(props: ButtonProps) {
  const {
    kind,
    onClick,
    className = undefined,
    isSubmit = false,
    children,
    ...otherProps
  } = props;

  const buttonType = isSubmit ? "submit" : "button";

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
    <button
      type={buttonType}
      className={cssClasses()}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default BaseButton;
