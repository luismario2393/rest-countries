import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 50px;
`;
export const ContainerHeader = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 10px -5px 13px 8px #f2f2f2;
  height: 100px;

  a {
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: #000;
  }
`;
