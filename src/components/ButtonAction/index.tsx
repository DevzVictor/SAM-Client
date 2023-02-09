import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonActionProps = {
  value: string;
} & ButtonType;

const ButtonAction = ({ value, ...props }: ButtonActionProps) => {
  return <S.ButtonAction {...props}>{value}</S.ButtonAction>;
};

export default ButtonAction;
