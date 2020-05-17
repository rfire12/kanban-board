import React from 'react';
import '../assets/scss/normalize.scss';

import { Route, Switch } from 'react-router-dom';

import Board from './Board/Board';
import GlobalState from '../context/GlobalState';
import CardEditor from './CardEditor/CardEditor';

import AppWrapper from './AppWrapper/AppWrapper';

const App = () => {
  return (
    <Switch>
      <GlobalState>
        <AppWrapper>
          <Route path="/">
            <Board />
          </Route>
          <Route path="/card">
            <CardEditor />
          </Route>
        </AppWrapper>
      </GlobalState>
    </Switch>
  );
};

export default App;
