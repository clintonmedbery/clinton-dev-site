import React, { useState } from "react";
// import styles from './DesktopLabel.module.css';
import {Terminal} from "../Terminal/Terminal";
import {IconWithLabel} from "../IconWithLabel/IconWithLabel";
import {iconTypes} from "../IconWithLabel/IconWithLabelConstants";

export const DesktopView = () => {
    const [isTerminalHidden, setTerminalHidden] = useState(false);

    const showTerminal = () => {
        setTerminalHidden(false);
    };

    const closeTerminal = () => {
        setTerminalHidden(true);
    };

    return (
        <>
            <IconWithLabel
                type={iconTypes.terminal}
                labelTitle={"Terminal"}
                doubleClickHandler={showTerminal}
                positionX={window.innerWidth - 100}
                positionY={50}
            />
            <Terminal isHidden={isTerminalHidden} closeHandler={closeTerminal}/>
        </>

    );
};