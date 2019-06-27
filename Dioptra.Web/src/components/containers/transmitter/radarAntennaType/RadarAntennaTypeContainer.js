import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RadarAntenaTypeContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [radarAntenaType, setRadarAntenaType] = useState({})
  async function onSave(value) {
    if (value.id) {
      // για αλλαγή όταν γίνουν οι κλήσεις
      const response = await api.put(
        `/api/lookup/radarantenatype/${id}`,
        value
      )
      if (response) {
        setRadarAntenaType(response)
      }
    } else {
      // για αλλαγή όταν γίνουν οι κλήσεις
      const response = await api.post(
        `/api/lookup/radarantenatype/${id}`,
        value
      )
      if (response) {
        setRadarAntenaType(response)
        history.push('/antenatransmittertypedetails/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/antenatransmittertypes')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    // για αλλαγή όταν γίνουν οι κλήσεις
    await api.delete(`/api/lookup/radarantenatype/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchRadarAntenaType() {
      if (id === 'new') {
        return
      }
      // για αλλαγή όταν γίνουν οι κλήσεις
      const response = await api.get(`/api/lookup/radarantenatype/${id}`)
      setRadarAntenaType(response)
    }
    fetchRadarAntenaType()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      radarAntenaType,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(RadarAntenaTypeContainer)
