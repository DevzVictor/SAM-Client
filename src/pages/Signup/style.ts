import styled, { css } from "styled-components";


export const SignupScreen = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      display: grid;
    }
  `}
`;

export const SignupRight = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100vh;
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const SignupLeft = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100vh;
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const SignupLogo = styled.div`
  ${() => css`
    display: flex;
    padding: 20px 0px 0px 50px;
    img {
      height: 80px;
    }
    @media (max-width: 700px) {
      img {
        height: 60px;
        justify-content: center;
        align-items: center;
      }
    }
  `}
`;

export const SignupTextSlogan = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.textColor};
    text-align: center;
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

export const SignupImg = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    img {
      width: 70%
    }
  `}
`;

export const SignupContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `}
`;
