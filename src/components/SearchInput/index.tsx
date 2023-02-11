import { ChangeEvent, FC } from "react";
import { IoMdSearch } from "react-icons/io";
import { Container } from "./styled";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchInput: FC<Props> = ({ onChange, placeholder }) => {
  return (
    <Container>
      <IoMdSearch />
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};
