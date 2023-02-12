import styled, { css } from "styled-components";

export const Patient = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    width: 100%
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const PatientContent = styled.main`
  ${() => css`
    width: calc(100%);
    padding: 20px;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
  `}
`;

export const PatientHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const PatientHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    text-transform: uppercase;
    margin: 0;
  `}
`;

export const PatientHeaderDetailsSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.mixins.input()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    input {
      background: transparent;
      border: none;
      height: 100%;
      color: ${theme.colors.textColor};
      outline: none;
    }
  `}
`;

export const PatientTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end ;
    border-bottom: 1px solid ${theme.colors.baseLine};
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    padding-top: 10px;
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

export const PatientPatientList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;

export const PatientPatientListGap = styled.div`
  ${({ theme }) => css`
    width: 200px;
  `}
`;

export const PatientHeaderText = styled.h5`
  ${() => css`
    margin: 0;

  `}
`;

export const UserCardImage = styled.img`
  ${() => css`
    width: 50px;
    border-radius: 50%;
    margin-top: -75px;
  `}
`;

export const PatientDetailsDivImg = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    @media (max-width: 900px){
        width: 100%;
        margin-top: 10px;
    }
  `}
`;

export const PatientDetailsDivIntern = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
    width: 40%;
    @media (max-width: 900px){
        width: 100%;
    }
  `}
`;

export const PatientCardImage = styled.img`
  ${() => css`
    width: 150px;
    border-radius: 50%;
  `}
`;

export const BoxModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    padding: 0px 30px 0px 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border: solid
    width: 100%;
    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
    }
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
      outline: none;
      border-color: ${theme.colors.primaryColor};
      width: 100%;
      height: 30px;
    }
    span {
      ${theme.mixins.bodyStyle()};
      color: ${theme.colors.primaryColor};
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      width: 49%;
    }
    }
    .cpf {
        width: 49%;
    }
    .data {
        width: 49%;
    }
    .phone {
        width: 49%;
    }
    .nome {
        width: 100%;
    }
    .detalhes {
      height: 60%;
    }
  `}
`;

export const BoxModalFormList = styled.form`
  ${({ theme }) => css`
    display: flex;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primaryColor};
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border: 1px solid
    width: 100%;
    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
    }
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
      outline: none;
      border-color: ${theme.colors.primaryColor};
      width: 50%;
      height: 30px;
    }
    span {
      ${theme.mixins.bodyStyle()};
      color: ${theme.colors.primaryColor};
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      width: 49%;
    }
    }
    .quantidade {
        width: 16%;
    }
    .quantidade {
        width: 16%;
    }
    .tipo {
        width: 16%;
    }
    .repetir {
        width: 16%;
    }
    .obs {
      width: 100%;
    }
    .data {
      width: 24%;
    }
  `}
  `;

export const PatientDetailsDivInternList = styled.div`
${() => css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 5px;
  width: 100%;
  @media (max-width: 900px){
      width: 100%;
  }

  button {
    width: 20%;
    height: 30px;
    margin: 0px;
  }
`}
`;