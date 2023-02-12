import styled from "styled-components";
import { Select } from "antd";

interface IContainer {
  darkMode: boolean;
}

export const ContainerCard = styled.div<IContainer>`
  padding: 0 100px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  background-color: ${({ darkMode }) => (darkMode ? "#202d36" : " #fff")};
`;
export const ContainerFilters = styled.div<IContainer>`
  padding: 0 100px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "#202d36" : " #fff")};
`;

export const StyledSelect = styled(Select)<{ darkMode: boolean }>`
  .ant-select-selector {
    width: 200px !important;
    height: 60px !important;
    border: none !important;
    box-shadow: 0px -1px 6px 1px ${({ darkMode }) => (darkMode ? "  rgba(0, 0, 0, 0.2)" : " #f2f2f2")} !important;
    background-color: ${({ darkMode }) =>
      darkMode ? "#2b3743" : " #fff"} !important;
  }

  .ant-select-selection-search-input {
    height: 60px !important;
  }
  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
    color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")} !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
    color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")} !important;
  }

  .ant-select-arrow {
    svg {
      color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")} !important;
      width: 16px !important;
      height: 16px !important;
      ${({ open }) =>
        open &&
        `
        transform: rotate(180deg);
        transition: transform 0.3s ease-in-out;
      
      `}
    }
  }

  .ant-select-dropdown {
    background-color: ${({ darkMode }) =>
      darkMode ? "#2b3743" : " #fff"} !important;
    color: ${({ darkMode }) => (darkMode ? "#fff" : " #000")} !important;
  }

  &:focus {
    outline: none !important;
    border: none !important;
  }
`;
