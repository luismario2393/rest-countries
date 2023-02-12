import styled from "styled-components";

interface IContainer {
  darkMode: boolean;
}

export const Card = styled.div<IContainer>`
  width: 280px;
  height: 350px;
  background-color: ${({ darkMode }) => (darkMode ? "#2b3743" : " #fff")};
  border-radius: 6px;
  box-shadow: 10px -5px 13px 8px ${({ darkMode }) => (darkMode ? "rgba(0, 0, 0, 0.2)" : " #f2f2f2")};
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 6px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px 6px 0 0;
  }
`;

export const ContainerText = styled.div<IContainer>`
  padding: 20px;
  color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")};
  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }
`;
