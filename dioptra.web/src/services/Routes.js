import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../components/layout/Home';
import  JrflType from '../components/jrfl/jrflType/JrflType';
import JrflFrequencies from '../components/jrfl/jrflFrequencies/JrflFrequencies';
import Hdm from '../components/hdm/Hdm';

export const fullAccess = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hdm" exact component={Hdm} />
        <Route path="/jrflType" exact component={JrflType} />
        <Route path="/jrflFrequencies" exact component={JrflFrequencies} />
        <Redirect to="/" />
    </Switch>
);

export const unAuthorized = (
    <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
    </Switch>
);