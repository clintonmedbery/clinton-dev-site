import React from "react";
import { IconWithLabelView } from "./IconWithLabelView";
import {iconTypes} from "./IconWithLabelConstants";
import TerminalIconSvg from "../../Images/SVGComponents/TerminalIcon";

export const IconWithLabel = ({type, labelTitle, doubleClickHandler, positionX, positionY}) => {

    let iconSvg = () => {
        switch (type) {
            case iconTypes.terminal:
                return <TerminalIconSvg height={64} width={64}/>;
            default:
                return null;
        }
    };

    return (
        <IconWithLabelView
            iconSvg={iconSvg()}
            labelTitle={labelTitle}
            doubleClickHandler={doubleClickHandler}
            positionX={positionX}
            positionY={positionY}
        />
    );
};