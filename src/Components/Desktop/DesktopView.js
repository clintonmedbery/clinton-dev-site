import React from "react";
import {Terminal} from "../Terminal/Terminal";
import {IconWithLabel} from "../IconWithLabel/IconWithLabel";
import {iconTypes} from "../IconWithLabel/IconWithLabelConstants";
import {Resume} from "../Resume/Resume";
import styles from './DesktopStyles.module.css'

export const DesktopView = ({ isTerminalHidden, showTerminal, closeTerminal, showResume, isResumeHidden, closeResume, goHome }) => {

    return (
        <div className={styles.desktop}>
          <IconWithLabel
            type={iconTypes.home}
            labelTitle={"Home"}
            doubleClickHandler={goHome}
            positionX={window.innerWidth - 100}
            positionY={50}
          />
          <IconWithLabel
              type={iconTypes.terminal}
              labelTitle={"Terminal"}
              doubleClickHandler={showTerminal}
              positionX={window.innerWidth - 100}
              positionY={100}
          />
          <Terminal
              isHidden={isTerminalHidden}
              closeHandler={closeTerminal}
              showResume={showResume}
          />
          <Resume isHidden={isResumeHidden} closeHandler={closeResume}/>
        </div>

    );
};
