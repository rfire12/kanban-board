import '../assets/scss/normalize.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';

import Board from './Board/Board';
import GlobalState from '../context/GlobalState';

const App = () => (
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

export default App;
