import styled from "styled-components";
import { Select } from "antd";

export const Container = styled.div`
  background-color: #fafafa;
`;
export const ContainerCard = styled.div`
  padding: 0 100px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
export const ContainerFilters = styled.div`
  padding: 0 100px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    width: 200px !important;
    height: 60px !important;
    border: none !important;
    box-shadow: 0px -1px 6px 1px #f2f2f2 !important;
  }

  .ant-select-selection-search-input {
    height: 60px !important;
  }
  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
    color: #000;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
    color: #000;
  }

  .ant-select-arrow {
    svg {
      color: #000;
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
  &:focus {
    outline: none !important;
    border: none !important;
  }
`;
