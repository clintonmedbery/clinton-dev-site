import React from "react";
import Draggable from 'react-draggable';
import styles from './Terminal.module.css';
import { TitleBar, Window } from "react-desktop";

export const TerminalView = ({isHidden, closeHandler}) => {

    return (
        <div>
        <Draggable>
            <Window hidden={isHidden} padding={'10px'} chrome height={'400px'} width={'500px'} horizontalAlignment={'center'} background={'black'}>
                <TitleBar title={'clintonmedbery@Clinton-MacBook-Pro'} controls onCloseClick={closeHandler}/>
                <div className={styles.terminalTextField}>Welcome to Clinton's Terminal. We Are just getting started here.
                    Stay tuned in for more changes happening in October 2019.</div>
            </Window>
        </Draggable>
        </div>

    );
};