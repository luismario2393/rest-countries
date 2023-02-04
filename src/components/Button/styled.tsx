import styled from "styled-components";
import { TButton } from ".";

interface IButton {
  typeButton: string;
}

export const StyledButton = styled.button<IButton>`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 11px;
  font-family: "Unbounded", cursive;
  border: none;
  cursor: pointer;
  ${({ typeButton }) => {
    switch (typeButton) {
      case TButton.ghost:
        return `
          background: transparent;

        `;
      case TButton.default:
        return `
          background-color: #fff;
          box-shadow: 0px -1px 6px 1px rgba(0,0,0,0.20);
          border-radius: 4px;
          padding: 8px;

          
        `;
      default:
        return `
          background-color: #fff;
          box-shadow: 0px -1px 6px 1px rgba(0,0,0,0.20);

          
        `;
    }
  }}
`;
