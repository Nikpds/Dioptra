import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/layouts/Home'
import Eob from '../components/eob/eob'
import UserDetails from '../components/user/UserDetails'
import Users from '../components/user/Users'
import UnitMissionForm from '../components/units/unitMission/UnitMissionDetails'
import UnitMissiontTable from '../components/units/unitMission/UnitMissions'

import JrflTypeDetails from '../components/jrfl/jrflType/JrflTypeDetails'
import JfrlTypeTable from '../components/jrfl/jrflType/JrflTypes'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/eob" exact component={Eob} />
    <Route path="/user/:id" exact component={UserDetails} />
    <Route path="/users/:page/:pageSize" exact component={Users} />
    <Route path="/unitmission/:id" exact component={UnitMissionForm} />
    <Route path="/unitmissions" exact component={UnitMissiontTable} />
    <Route path="/JrflType/:id" exact component={JrflTypeDetails} />
    <Route path="/JrflTypes" exact component={JfrlTypeTable} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
