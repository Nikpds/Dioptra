import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/layouts/Home'
import Eob from '../components/eob/eob'
import UserDetails from '../components/user/UserDetails'
import UserList from '../components/user/UserList'
import UnitMissionDetails from '../components/unitMission/UnitMissionDetails'
import UnitMissionList from '../components/unitMission/UnitMissionList'

import JrflTypeDetails from '../components/jrfl/jrflType/JrflTypeDetails'
import JrflTypeList from '../components/jrfl/jrflType/JrflTypeList'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/eob" exact component={Eob} />
    <Route path="/user/:id" exact component={UserDetails} />
    <Route path="/users" exact component={UserList} />
    <Route path="/unitmission/:id" exact component={UnitMissionDetails} />
    <Route path="/unitmissions" exact component={UnitMissionList} />
    <Route path="/JrflType/:id" exact component={JrflTypeDetails} />
    <Route path="/JrflTypes" exact component={JrflTypeList} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
