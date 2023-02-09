import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

type CardIconStyled = { active: boolean };

const CardIconModifiers = {
  active: (theme: Theme) => css`
    border: 1px solid ${theme.colors.textLight};
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.textColor};
    
  `,
};

export const CardIcon = styled.div<CardIconStyled>`
  ${({ theme, active }) => css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    position: relative;
    background: #fff;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    ${active && CardIconModifiers.active(theme)}
  `}
`;
