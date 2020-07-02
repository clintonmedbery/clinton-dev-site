import React from 'react';
import './App.css';
import Desktop from "./Components/Desktop/Desktop";
import Main from "./Components/Main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/desktop" component={Desktop}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
