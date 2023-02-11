import styled, { css } from "styled-components";

export const BoxModalText = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
  `}
`;

export const ModalDiv = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 20px 0;
    button {
      margin-left: 8rem;
    }
  `}
`;

export const ModalDiv1 = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 20px 0;
  `}
`;

export const CloseIcon = styled.button`
  ${({ theme }) => css`
    border: none;
    color: red !important;
    display: flex;
    position: relative;
    background: transparent;
    cursor: pointer;
  `}
`;

export const BoxModal = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    display: flex;
    flex-direction: flex;
    justify-content: space-around;
    color: ${theme.colors.textColor};
  `}
`;

export const BoxModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    border: none
    width: 100%;
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
      outline: none;
      border-color: ${theme.colors.primaryColor};
      width: 100%;
      height: 34px;
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
    .data {
        width: 49%;
    }
    .horas {
        width: 49%;
    }
    .nome {
        width: 100%;
    }
  `}
`;
