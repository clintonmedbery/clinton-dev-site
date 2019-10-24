import React from "react";
import { TerminalView } from "./TerminalView";

export const Terminal = ({isHidden, closeHandler}) => {

    return (
        <TerminalView isHidden={isHidden} closeHandler={closeHandler}/>
    );
};