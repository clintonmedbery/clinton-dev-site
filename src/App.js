import React from 'react';
import './App.css';
import Desktop from "./Components/Desktop/Desktop";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HeadsDown from "./Components/HeadsDownPolicy/HeadsDown";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/desktop" component={Desktop}/>
          <Route exact path="/headsdown-privacy" component={HeadsDown}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
