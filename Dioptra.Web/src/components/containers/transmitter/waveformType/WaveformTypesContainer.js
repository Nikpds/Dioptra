import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const WaveformTypesContainer = props => {
  const { children, history } = props
  const [waveformTypes, setWaveformTypes] = useState([])

  function onCreate() {
    history.push('/waveformtype/new')
  }

  function onEdit(id) {
    history.push(`/waveformtype/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/waveformtype/${id}`)
    const index = waveformTypes.findIndex(x => (x.id = id))
    waveformTypes.splice(index, 1)
    setWaveformTypes([...waveformTypes])
  }

  useEffect(() => {
    async function fetchWaveformTypes() {
      const response = await api.get('/api/lookup/waveformtype')
      if (response && response.length > 0) {
        setWaveformTypes(response)
      }
    }
    fetchWaveformTypes()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      waveformTypes,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(WaveformTypesContainer)