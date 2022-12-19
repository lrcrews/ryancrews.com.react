import BaseButton, { ButtonKind, ButtonProps } from "./BaseButton";

type SecondaryButtonProps = Omit<ButtonProps, "kind">;

function SecondaryButton(props: SecondaryButtonProps) {
  const { onClick, children, ...otherProps } = props;

  return (
    <BaseButton kind={ButtonKind.Secondary} onClick={onClick} {...otherProps}>
      {children}
    </BaseButton>
  );
}

export default SecondaryButton;
