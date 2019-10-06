import React, { Component } from 'react';
import logo from './logo.svg';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';
import {GoRef} from "./refcomponents/GoRef";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          The Chandy Reference Library
        </div>


        <Router>
          <Link to="/go">golang</Link>
        <Switch>
          <Route path="/go">
            <GoRef />
          </Route>
        </Switch>
        </Router>


      </div>
    );
  }
}

export default App;
