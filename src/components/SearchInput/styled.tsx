import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 6px 1px #f2f2f2;
  width: 500px;
  height: 36px;
  border-radius: 6px;
  gap: 20px;
  padding: 12px 12px 12px 30px;
  svg {
    width: 30px;
    height: 30px;
    color: #979797;
  }

  input {
    outline: none;
    border: none;
    &::placeholder {
      color: #979797;
      font-size: 14px;
    }
  }
`;
