import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const WaveformTypeContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [waveformType, setWaveformType] = useState({})
  
    async function onSave(value) {
      if (value.id) {
        const response = await api.put(`/api/lookup/waveformtype/${id}`, value)
        if (response) {
          setWaveformType(response)
        }
      } else {
        const response = await api.post(`/api/lookup/waveformtype`, value)
        if (response) {
          setWaveformType(response)
          history.push('/waveformtype/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/WaveformTypes')
    }
    function onCancel() {
      onBack()
    }
    async function onDelete() {
      await api.delete(`/api/lookup/waveformtype/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchWaveformType() {
        if (id === 'new') {
          return
        }
        const response = await api.get(`/api/lookup/waveformtype/${id}`)
        setWaveformType(response)
      }
      fetchWaveformType()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        waveformType,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(WaveformTypeContainer)