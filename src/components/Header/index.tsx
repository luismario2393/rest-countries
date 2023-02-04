import { IoMoonOutline } from "react-icons/io5";
import { Button, TButton } from "../Button";
import { ContainerHeader, StyledHeader } from "./styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <Link to="/">Where in the world?</Link>
        <Button
          type={TButton.ghost}
          icon={<IoMoonOutline />}
          text={"Dark Mode"}
          onClick={() => console.log("dark mode")}
        />
      </ContainerHeader>
    </StyledHeader>
  );
};
