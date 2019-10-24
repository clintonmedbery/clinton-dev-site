import React from 'react';
import './App.css';
import {Terminal} from "./Components/Terminal/Terminal";
import {IconWithLabel} from "./Components/IconWithLabel/IconWithLabel";
import {iconTypes} from "./Components/IconWithLabel/IconWithLabelConstants";

function App() {
  return (
    <div className="App">
      <Terminal/>
      <IconWithLabel
          type={iconTypes.terminal}
          labelTitle={"Terminal"}
          doubleClickHandler={() => {}}
          positionX={window.innerWidth - 100}
          positionY={-(window.innerWidth / 2) + 50}
      />
    </div>
  );
}

export default App;
