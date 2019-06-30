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
import WaveformTypes from '../components/transmitter/waveformTypes/WaveformTypes'
import WaveformTypeDetails from '../components/transmitter/waveformTypes/WaveformTypeDetails'
import EmmiterFunctions from '../components/transmitter/emmiterfunctions/EmmiterFunctions'
import EmmiterFunctionDetails from '../components/transmitter/emmiterfunctions/EmmiterFunctionDetails'
import RadarAntenaTypeForm from '../components/transmitter/radarAntenaType/RadarAntenaTypeDetails'
import RadarAntenaTypesTable from '../components/transmitter/radarAntenaType/RadarAntenaTypes'
import ScanFunctions from '../components/transmitter/scanFunctions/ScanFunctions'
import ScanFunctionDetails from '../components/transmitter/scanFunctions/ScanFunctionDetails'
import UnitDetailsForm from '../components/units/units/UnitDetails'
import UnitsTable from '../components/units/units/Units'
import PriAgilities from '../components/transmitter/agility/Pri'
import RFAgilities from '../components/transmitter/agility/Rf'
import PwAgilities from '../components/transmitter/agility/Pw'
import RfDetailsForm from '../components/transmitter/agility/RfDetails'
import PwDetailsForm from '../components/transmitter/agility/PwDetails'
import PriDetailsForm from '../components/transmitter/agility/PriDetails'

export const fullAccess = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/eob" exact component={Eob} />
    <Route path="/user/:id" exact component={User} />
    <Route path="/users/:page/:pagesize" exact component={Users} />

    <Route path="/jrflType/:id" exact component={JrflTypeDetails} />
    <Route path="/jrflTypes" exact component={JfrlTypeTable} />
    <Route path="/nationality/:id" exact component={NationalityDetails} />
    <Route
      path="/nationalities/:page/:pagesize"
      exact
      component={Nationalities}
    />
    <Route path="/unit/:id" exact component={UnitDetailsForm} />
    <Route path="/units/:page/:pagesize" exact component={UnitsTable} />
    <Route path="/unitmission/:id" exact component={UnitMissionForm} />
    <Route path="/unitmissions" exact component={UnitMissiontTable} />
    <Route path="/unittype/:id" exact component={UnitTypeForm} />
    <Route path="/unittypes" exact component={UnitTypeTable} />
    <Route path="/waveformtype/:id" exact component={WaveformTypeDetails} />
    <Route path="/waveformtypes" exact component={WaveformTypes} />
    <Route
      path="/emmiterfunction/:id"
      exact
      component={EmmiterFunctionDetails}
    />
    <Route path="/emmiterfunctions" exact component={EmmiterFunctions} />
    <Route path="/radarantennatype/:id" exact component={RadarAntenaTypeForm} />
    <Route path="/radarantennatypes" exact component={RadarAntenaTypesTable} />
    <Route path="/scanfunction/:id" exact component={ScanFunctionDetails} />
    <Route path="/scanfunctions" exact component={ScanFunctions} />

    <Route path="/agility/rf/:id" exact component={RfDetailsForm} />
    <Route path="/agilities/rf" exact component={RFAgilities} />

    <Route path="/agility/pw/:id" exact component={PwDetailsForm} />
    <Route path="/agilities/pw" exact component={PwAgilities} />

    <Route path="/agility/pri/:id" exact component={PriDetailsForm} />
    <Route path="/agilities/pri" exact component={PriAgilities} />
    <Redirect to="/" />
  </Switch>
)

export const unAuthorized = (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Redirect to="/login" />
  </Switch>
)
