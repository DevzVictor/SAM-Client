import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonRemoveProps = {
  value: string;
} & ButtonType;

const ButtonRemove = ({ value, ...props }: ButtonRemoveProps) => {
  return <S.ButtonRemove {...props}>{value}</S.ButtonRemove>;
};

export default ButtonRemove;
