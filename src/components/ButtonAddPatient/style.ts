import styled, { css } from "styled-components";

export const ButtonAddPatient = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    border: none;
    border-radius: 8px;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: ${theme.colors.textLighter};
    width: 25%;
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