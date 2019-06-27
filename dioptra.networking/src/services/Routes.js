import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../layout/Home';
export const fullAccess = (
    <Switch>
        <Route path="/network/" exact component={Home} />
        <Redirect to="/" />
    </Switch>
);

export const unAuthorized = (
    <Switch>
        <Route path="/network/login" exact component={Login} />
        <Redirect to="/network/login" />
    </Switch>
);