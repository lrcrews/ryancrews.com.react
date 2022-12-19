import BaseButton, { ButtonKind, ButtonProps } from "./BaseButton";

type PrimaryButtonProps = Omit<ButtonProps, "kind">;

function PrimaryButton(props: PrimaryButtonProps) {
  const { onClick, children, ...otherProps } = props;

  return (
    <BaseButton kind={ButtonKind.Primary} onClick={onClick} {...otherProps}>
      {children}
    </BaseButton>
  );
}

export default PrimaryButton;
