import React from "react";
import { IconWithLabelView } from "./IconWithLabelView";
import {iconTypes} from "./IconWithLabelConstants";
import TerminalIconSvg from "../../Images/SVGComponents/TerminalIcon";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const IconWithLabel = ({type, labelTitle, doubleClickHandler, positionX, positionY}) => {

    let iconSvg = () => {
        switch (type) {
            case iconTypes.terminal:
                return <TerminalIconSvg height={64} width={64}/>;
            case iconTypes.home:
                return <FontAwesomeIcon icon={faDesktop} size="4x" color={"#242A2E"}/>
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
