import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 350px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 10px -5px 13px 8px #f2f2f2;
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
