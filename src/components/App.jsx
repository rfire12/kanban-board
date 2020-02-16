import "../assets/scss/normalize.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useReducer, useState } from "react";

import Board from "./Board/Board";
import GlobalState from "../context/GlobalState";

const App = () => {
  return (
    <Router>
      <Switch>
        <GlobalState>
          <Route path="/">
            <Board />
          </Route>
        </GlobalState>
      </Switch>
    </Router>
  );
};

export default App;
