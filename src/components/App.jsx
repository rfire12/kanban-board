import '../assets/scss/normalize.scss';

import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Board from './Board/Board';
import GlobalState from '../context/GlobalState';

const App = () => (
  <Switch>
    <GlobalState>
      <Route path="/">
        <button type="button" onClick={() => console.log('you clicked me')}>
          test
        </button>
        <Board />
      </Route>
    </GlobalState>
  </Switch>
);

export default App;
