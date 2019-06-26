import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitMissionContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [unitMission, setUnitMission] = useState({})

  async function onSave(value) {
    if (value.id) {
      console.log("eimai sitn on Save");
      const response = await api.put(`/api/lookup/unitmission/${id}`, value)
      console.log(response)
      if (response) {
        setUnitMission(response)
      }
    } else {
      const response = await api.post(`/api/lookup/unitmission`, value)
      if (response) {
        setUnitMission(response)
        history.push('/unitmission/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/unitmissions')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/lookup/unitmission/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchMission() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/unitmission/${id}`)
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
