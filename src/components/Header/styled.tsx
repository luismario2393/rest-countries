import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 50px;
`;
export const ContainerHeader = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 10px -5px 13px 8px #f2f2f2;
  height: 60px;

  a {
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    color: #000;
  }
`;
