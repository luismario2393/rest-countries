import { ChangeEvent, FC } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../state/atom/darkMode";
import { Container } from "./styled";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchInput: FC<Props> = ({ onChange, placeholder }) => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <Container darkMode={darkMode}>
      <IoMdSearch />
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};
