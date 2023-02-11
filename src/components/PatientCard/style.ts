import styled, { css } from "styled-components";

export const PatientCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    min-height: 225px;
    .name {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }
  `}
`;

export const PatientCardImage = styled.img`
  ${() => css`
    width: 150px;
    border-radius: 50%;
    margin-top: -75px;
  `}
`;

export const PatientCardName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    width: 100%;
    margin: 5px 0px 5px 0px;
  `}
`;

export const CardIcon = styled.button`
  ${({ theme}) => css`
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
  `}
`;
