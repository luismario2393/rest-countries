import styled from "styled-components";

interface IContainer {
  darkMode: boolean;
}

export const Container = styled.div<IContainer>`
  background-color: ${({ darkMode }) => (darkMode ? "#2b3743" : " #fff")};
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 6px 1px ${({ darkMode }) => (darkMode ? "rgba(0, 0, 0, 0.2)" : " #f2f2f2")};
  width: 500px;
  height: 36px;
  border-radius: 6px;
  gap: 20px;
  padding: 12px 12px 12px 30px;
  svg {
    width: 30px;
    height: 30px;
    color: ${({ darkMode }) => (darkMode ? "#fff" : " #979797")};
  }

  input {
    outline: none;
    border: none;
    background-color: ${({ darkMode }) => (darkMode ? "#2b3743" : " #fff")};
    &::placeholder {
      color: ${({ darkMode }) => (darkMode ? "#fff" : " #979797")};
      font-size: 14px;
    }
  }
`;
