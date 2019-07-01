import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RadarAntenaTypeContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [radarAntenaType, setRadarAntenaType] = useState({})
  async function onSave(value) {
    if (value.id) {
      const response = await api.put(
        `/api/lookup/radarantennatype/${id}`,
        value
      )
      if (response) {
        setRadarAntenaType(response)
      }
    } else {
      const response = await api.post(`/api/lookup/radarantennatype/`, value)
      if (response) {
        setRadarAntenaType(response)
        history.push('/radarantennatype/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/radarantennatypes')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/lookup/radarantennatype/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchRadarAntenaType() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/radarantennatype/${id}`)
      if (response) setRadarAntenaType(response)
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
