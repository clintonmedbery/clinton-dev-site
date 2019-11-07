import React, { useState } from "react";
// import styles from './DesktopLabel.module.css';
import {Terminal} from "../Terminal/Terminal";
import {IconWithLabel} from "../IconWithLabel/IconWithLabel";
import {iconTypes} from "../IconWithLabel/IconWithLabelConstants";
import {Resume} from "../Resume/Resume";

export const DesktopView = () => {
    const [isTerminalHidden, setTerminalHidden] = useState(false);
    const [isResumeHidden, setResumeHidden] = useState(true);

    const showTerminal = () => {
        setTerminalHidden(false);
    };

    const closeTerminal = () => {
        setTerminalHidden(true);
    };

    const showResume = () => {
        setResumeHidden(false)
    };

    const closeResume = () => {
        setResumeHidden(true)
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
            <Terminal
                isHidden={isTerminalHidden}
                closeHandler={closeTerminal}
                showResume={showResume}
            />
            <Resume isHidden={isResumeHidden} closeHandler={closeResume}/>
        </>

    );
};