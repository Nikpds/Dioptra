import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/Home'
import ServerDetails from '../components/server/ServerDetails'
import Servers from '../components/server/Servers'
import DashboardContainer from '../components/containers/DashboardContainer'
import ServerMonitor from '../components/server/ServerMonitor'
import Users from '../components/user/Users'
import UserDetails from '../components/user/UserDetails'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/server/:id" exact component={ServerDetails} />
    <Route path="/server/monitor/:id" exact component={ServerMonitor} />
    <Route path="/servers" exact component={Servers} />
    <Route path="/dashboard" exact component={DashboardContainer} />
    <Route path="/user/:id" exact component={UserDetails} />
    <Route path="/users" exact component={Users} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
