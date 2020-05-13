import '../assets/scss/normalize.scss';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';

import Board from './Board/Board';
import GlobalState from '../context/GlobalState';

const App = () => (
  <BrowserRouter>
    <Switch>
      <GlobalState>
        <Route path="/">
          <Board />
        </Route>
      </GlobalState>
    </Switch>
  </BrowserRouter>
);

export default App;
