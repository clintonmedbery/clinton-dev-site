import React from "react";
import { TerminalView } from "./TerminalView";

export const Terminal = ({isHidden, closeHandler, showResume}) => {

    return (
        <TerminalView
            isHidden={isHidden}
            closeHandler={closeHandler}
            showResume={showResume}
        />
    );
};