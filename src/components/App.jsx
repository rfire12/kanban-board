import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Board from './Board/Board';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/">
                <Board />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
