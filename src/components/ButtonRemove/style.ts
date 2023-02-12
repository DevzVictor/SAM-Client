import styled, { css } from "styled-components";

export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    background: red;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    color: ${theme.colors.textLighter};
    width: 48%;
    cursor: pointer;
    ${theme.mixins.bodyStyle()};
    font-weight: 600;
    &:disabled {
      color: ${theme.colors.textLighter};
      background: ${theme.colors.baseBg1};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`;