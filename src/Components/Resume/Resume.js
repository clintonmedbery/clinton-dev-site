import React from "react";
import { ResumeView } from "./ResumeView";

export const Resume = ({ isHidden, closeHandler}) => {
    return (
        <ResumeView
            isHidden={isHidden}
            closeHandler={closeHandler}
        />
    );
};