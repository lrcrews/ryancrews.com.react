import {
  ButtonHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

export enum ButtonKind {
  Primary,
  Secondary,
}

export enum ButtonSize {
  Small,
  Regular,
  Large,
}

type _ButtonProps = {
  kind: ButtonKind;
  onClick:
    | KeyboardEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLButtonElement>;

  className?: string;
  isSubmit?: boolean;
  size?: ButtonSize;

  children: ReactNode;

  [remainingProp: string]: any;
};

export type ButtonProps = _ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

function BaseButton(props: ButtonProps) {
  const {
    kind,
    onClick,
    className = undefined,
    isSubmit = false,
    size = ButtonSize.Regular,
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

    switch (size) {
      case ButtonSize.Small:
        classString += " baseButton-small";
        break;
      case ButtonSize.Large:
        classString += " base-button-large";
        break;
      case ButtonSize.Regular:
      default:
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
