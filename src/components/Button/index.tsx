import { FC, ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../state/atom/darkMode";
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
  const darkMode = useRecoilValue(darkModeState);
  return (
    <StyledButton typeButton={type} {...props} darkMode={darkMode}>
      {icon && icon}
      {text}
    </StyledButton>
  );
};
