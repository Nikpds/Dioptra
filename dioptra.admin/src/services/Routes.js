import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/Home'
import ServerDetails from '../components/serverDetails/ServerDetails'
import ServersContainer from '../components/containers/ServersContainer'
import DashboardContainer from '../components/containers/DashboardContainer'

import UsersContainer from '../components/containers/UsersContainer'
import UserDetails from '../components/userDetails/UserDetails'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/server/:id" exact component={ServerDetails} />
    <Route path="/servers" exact component={ServersContainer} />
    <Route path="/dashboard" exact component={DashboardContainer} />
    <Route path="/user/:id" exact component={UserDetails} />
    <Route path="/users" exact component={UsersContainer} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
