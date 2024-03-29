import { ReactNode } from "react";

import "./buttons.scss";

interface ButtonContainerProps {
  className?: string;

  children: ReactNode;
}

function ButtonContainer(props: ButtonContainerProps) {
  const { className = "", children } = props;

  return <div className={`buttonContainer ${className}`}>{children}</div>;
}

export default ButtonContainer;
