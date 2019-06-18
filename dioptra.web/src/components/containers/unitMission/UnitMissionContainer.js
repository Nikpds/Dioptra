import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UnitMissionContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [unitMission, setUnitMission] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/unitMission/${id}`, value)
      if (response) {
        setUnitMission(response)
      }
    } else {
      const response = await api.post(`/api/unitMission`, value)
      if (response) {
        setUnitMission(response)
        history.push('/unitMission/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/UnitMissions')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/unitMission/${id}`)
    history.push('/UnitMissions')
  }

  useEffect(() => {
    async function fetchMission() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/unitMission/${id}`)
      setUnitMission(response)
    }

    fetchMission()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unitMission,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(UnitMissionContainer)
