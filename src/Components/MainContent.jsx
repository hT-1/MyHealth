import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';

const MainContent = () =>
  (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );

export default MainContent;
