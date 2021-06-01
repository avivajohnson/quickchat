import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Chat from './pages/Chat';
import Login from './pages/Login';

const App = () => (
  <Container maxWidth="sm">
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Chat} path="/chat" />
    </Switch>
  </Container>
);

export default App;
