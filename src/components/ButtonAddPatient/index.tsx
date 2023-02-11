import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAddPatientProps = {
  value: string;
} & ButtonType;

const ButtonAddPatient = ({ value, ...props }: ButtonAddPatientProps) => {
  return <S.ButtonAddPatient {...props}>{value}</S.ButtonAddPatient>;
};

export default ButtonAddPatient;
