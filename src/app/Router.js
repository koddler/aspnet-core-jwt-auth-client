import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Registration from '../components/Registration';
import Users from '../components/Users';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default Router;
