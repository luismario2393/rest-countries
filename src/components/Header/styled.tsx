import styled from "styled-components";

interface IContainerHeader {
  darkMode: boolean;
}

export const StyledHeader = styled.header`
  height: 100px;
`;
export const ContainerHeader = styled.div<IContainerHeader>`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "#2b3743" : " #fff")};
  box-shadow: 10px -5px 13px 8px #f2f2f2;
  height: 100px;

  a {
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")};
  }
`;
