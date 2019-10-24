import React from "react";
import Draggable from 'react-draggable';
import styles from './IconWithLabel.module.css';
import { DesktopLabel } from "../DesktopLabel/DesktopLabel";

export const IconWithLabelView = ({iconSvg, labelTitle, doubleClickHandler, positionX, positionY}) => {

    return (
        <Draggable defaultPosition={{x: positionX, y: positionY}}>
            <div className={styles.wrapper} onDoubleClick={doubleClickHandler}>
                <div>
                    {iconSvg}
                </div>
                <DesktopLabel labelTitle={labelTitle}/>
            </div>
        </Draggable>
    );
};