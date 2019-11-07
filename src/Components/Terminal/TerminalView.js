import React, { useState } from "react";
import Draggable from 'react-draggable';
import styles from './Terminal.module.css';
import { TitleBar, Window } from "react-desktop";
import {COMMAND_NOT_FOUND, DEFAULT_TERMINAL_TEXT, HELP, HELP_COMMANDS, RESUME} from "./TerminalConstants";

export const TerminalView = ({isHidden, closeHandler, showResume}) => {
    const [terminalText, setTerminalText] = useState(DEFAULT_TERMINAL_TEXT);

    const [terminalValue, setTerminalValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        switch(event.target[0].value) {
            case HELP:
                setTerminalText(HELP_COMMANDS);
                break;
            case RESUME:
                showResume();
                break;
            default:
                setTerminalText(COMMAND_NOT_FOUND);
        }
        setTerminalValue("");
    };

    const handleChange = event => {
        event.preventDefault();
        setTerminalValue(event.target.value);
    };

    return (
        <>
            <Draggable handle={'.can-drag'}>
                <Window hidden={isHidden} padding={'10px'} chrome height={'400px'} width={'500px'} horizontalAlignment={'center'} background={'black'}>
                    <TitleBar className={'can-drag'} title={'clintonmedbery@Clinton-MacBook-Pro'} controls onCloseClick={closeHandler}/>
                    <div className={styles.terminalText}>
                        {terminalText}
                    </div>
                    <div className={styles.terminalTextField}>
                        <form onSubmit={handleSubmit}>
                            > <input type='text' className={styles.terminalInput} value={terminalValue} onChange={handleChange} />
                            <input type={"submit"} style={{position: 'absolute', left: '-9999px'}}/>
                        </form>
                    </div>
                </Window>
            </Draggable>
        </>

    );
};