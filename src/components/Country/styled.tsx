import styled from "styled-components";

interface IContainer {
  darkMode: boolean;
}

export const Container = styled.div<IContainer>`
  background-color: ${({ darkMode }) => (darkMode ? "#202d36" : " #fff")};
  padding: 0 100px;
  height: calc(100vh - 100px);
`;
export const ContainerButton = styled.div`
  padding-top: 100px;
  button {
    width: 130px;
    height: 40px;
    justify-content: center;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ContainerDetail = styled.div<IContainer>`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#000 ")};
  img {
    width: 100%;
    height: 100%;
    box-shadow: 0px -1px 6px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ContainerText = styled.div`
  padding: 20px;
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

export const CountainerTextDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 40px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CountainerBorders = styled.div<IContainer>`
  display: grid;
  grid-template-columns: 156px 1fr;
  grid-gap: 16px;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    div {
      background-color: ${({ darkMode }) => (darkMode ? "#2b3743" : " #fff")};
      box-shadow: 0px -1px 6px 1px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 8px;
      font-size: 14px;
    }
  }
`;
