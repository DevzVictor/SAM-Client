import React, { HTMLAttributes } from "react";
import * as S from "./style";

type DivType = HTMLAttributes<HTMLDivElement>;


export type CardIconProps = {
    icon?: React.ReactNode;
    active?: boolean;
} & DivType;

const CardIcon = ({icon, active = false, ...props}: CardIconProps) => {
    return (
        <S.CardIcon active={active} {...props}>
            {icon && <div>{icon}</div>}
        </S.CardIcon>
    );
}

export default CardIcon;