import styled, { css } from "styled-components";

export const Settings = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
  `}
`;

export const SettingsPage = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: calc(100%);
    max-height: 100vh;
    padding: 25px;
    box-sizing: border-box;
  `}
`;

export const SettingsHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    text-transform: uppercase;
    margin: 0;
  `}
`;

export const SettingsHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const SettingsTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.primaryColor};
        border-radius: 5rem;
      }
    }
  `}
`;

export const SettingsContent = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `}
`;

