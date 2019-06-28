import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/containers/LoginContainer'
import Home from '../components/layouts/Home'
import Eob from '../components/eob/eob'
import User from '../components/user/UserDetails'
import Users from '../components/user/Users'
import UnitMissionForm from '../components/units/unitMission/UnitMissionDetails'
import UnitMissiontTable from '../components/units/unitMission/UnitMissions'
import JrflTypeDetails from '../components/jrfl/jrflType/JrflTypeDetails'
import JfrlTypeTable from '../components/jrfl/jrflType/JrflTypes'
import Nationalities from '../components/nationality/Nationalities'
import NationalityDetails from '../components/nationality/NationalityDetails'
import UnitTypeForm from '../components/units/unitType/UnitTypeDetails'
import UnitTypeTable from '../components/units/unitType/UnitTypes'
import WaveformTypes from '../components/transmitter/waveformtypes/WaveformTypes'
import WaveformTypeDetails from '../components/transmitter/waveformtypes/WaveformTypeDetails'
import EmmiterFunctions from '../components/transmitter/emmiterfunctions/EmmiterFunctions'
import EmmiterFunctionDetails from '../components/transmitter/emmiterfunctions/EmmiterFunctionDetails'
import AntenaTransmitterTypeDetails from '../components/transmitter/radarAntenaType/RadarAntenaTypeDetails'
import AntenaTransmitterTypes from '../components/transmitter/radarAntenaType/RadarAntenaTypes'
import ScanFunctions from '../components/transmitter/scanfunctions/ScanFunctions'
import ScanFunctionDetails from '../components/transmitter/scanfunctions/ScanFunctionDetails'
import PwAgilities from '../components/transmitter/pwagilities/PwAgilities'
import PwAgilityDetails from '../components/transmitter/pwagilities/PwAgilityDetails'
import PriAgilities from '../components/transmitter/priagilities/PriAgilities'
import PriAgilityDetails from '../components/transmitter/priagilities/PriAgilityDetails'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/eob" exact component={Eob} />
    <Route path="/user/:id" exact component={User} />
    <Route path="/users/:page/:pageSize" exact component={Users} />
    <Route path="/unitmission/:id" exact component={UnitMissionForm} />
    <Route path="/unitmissions" exact component={UnitMissiontTable} />
    <Route path="/jrflType/:id" exact component={JrflTypeDetails} />
    <Route path="/jrflTypes" exact component={JfrlTypeTable} />
    <Route path="/nationalities/:page/:pageSize" exact component={Nationalities} />
    <Route path="/nationality/:id" exact component={NationalityDetails} />
    <Route path="/unittype/:id" exact component={UnitTypeForm} />
    <Route path="/unittypes" exact component={UnitTypeTable} />
    <Route path="/waveformtype/:id" exact component={WaveformTypeDetails} />
    <Route path="/waveformtypes" exact component={WaveformTypes} />
    <Route path="/emmiterfunction/:id" exact component={EmmiterFunctionDetails} />
    <Route path="/emmiterfunctions" exact component={EmmiterFunctions} />
    <Route path="/antenatransmittertypedetails/:id" exact component={AntenaTransmitterTypeDetails} />
    <Route path="/antenatransmittertypes" exact component={AntenaTransmitterTypes} />
    <Route path="/scanfunction/:id" exact component={ScanFunctionDetails} />
    <Route path="/scanfunctions" exact component={ScanFunctions} />
    <Route path="/pwagility/:id" exact component={PwAgilityDetails} />
    <Route path="/pwagilities" exact component={PwAgilities} />
    <Route path="/priagility/:id" exact component={PriAgilityDetails} />
    <Route path="/priagilities" exact component={PriAgilities} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
