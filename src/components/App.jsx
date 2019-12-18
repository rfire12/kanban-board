import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Board from './Board/Board';
import "../assets/normalize.scss";

const App = () => {
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

export default App;
