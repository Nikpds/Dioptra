import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/Home'
import ServerContainer from '../components/containers/ServerContainer'
import ServersContainer from '../components/containers/ServersContainer'
import DashboardContainer from '../components/containers/DashboardContainer'
import UserContaines from '../components/containers/UserContainer'
import UsersContaines from '../components/containers/UsersContainer'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/server" exact component={ServerContainer} />
    <Route path="/servers" exact component={ServersContainer} />
    <Route path="/dashboard" exact component={DashboardContainer} />
    <Route path="/user" exact component={UserContaines} />
    <Route path="/users" exact component={UsersContaines} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
