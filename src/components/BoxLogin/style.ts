import styled, { css } from "styled-components";

export const BoxLogin = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    width: 50%;
    height: 80%;
    padding-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${theme.colors.textColor};
  `}
`;

export const BoxLoginLogoText = styled.text`
  ${({ theme }) => css`
    margin: 0;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.textColor};
    text-align: left;
    h2 {
      height: 100%;
    }
    @media (max-width: 700px) {
      h2 {
        font-size: 80%;
      }
    }
  `}
`;
export const BoxLoginLogoLink = styled.text`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    text-align: right;
    cursor: pointer;
    h2 {
      height: 100%;
    }
    @media (max-width: 700px) {
      h2 {
        font-size: 80%;
      }
    }
  `}
`;

export const BoxLoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
      outline: none;
      border-color: ${theme.colors.textLight};
    }
  `}
`;

export const BoxLoginError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;