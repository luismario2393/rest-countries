import { IoMoonOutline } from "react-icons/io5";
import { Button, TButton } from "../Button";
import { ContainerHeader, StyledHeader } from "./styled";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../state/atom/darkMode";

export const Header = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const toggleDarkmode = () => setDarkMode(!darkMode);

  return (
    <StyledHeader>
      <ContainerHeader darkMode={darkMode}>
        <Link to="/">Where in the world?</Link>
        <Button
          type={TButton.ghost}
          icon={<IoMoonOutline />}
          text={"Dark Mode"}
          onClick={toggleDarkmode}
        />
      </ContainerHeader>
    </StyledHeader>
  );
};
