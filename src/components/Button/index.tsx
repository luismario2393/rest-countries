import { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

export enum TButton {
  ghost = "ghost",
  default = "default",
}

interface Props {
  text: string;
  type: TButton;
  icon?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<Props> = ({ text, icon, type, ...props }) => {
  return (
    <StyledButton typeButton={type} {...props}>
      {icon && icon}
      {text}
    </StyledButton>
  );
};
