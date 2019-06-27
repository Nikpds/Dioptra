import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const WaveformTypesContainer = props => {
  const { children, history } = props
  const [emmiterFunctions, setEmmiterFunctions] = useState([])

  function onCreate() {
    history.push('/emmiterfunction/new')
  }

  function onEdit(id) {
    history.push(`/emmiterfunction/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/emmiterfunction/${id}`)
    const index = emmiterFunctions.findIndex(x => (x.id = id))
    emmiterFunctions.splice(index, 1)
    setEmmiterFunctions([...emmiterFunctions])
  }

  useEffect(() => {
    async function fetchEmmiterFunctions() {
      const response = await api.get('/api/lookup/waveformtype')
      if (response && response.length > 0) {
        setEmmiterFunctions(response)
      }
    }
    fetchEmmiterFunctions()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      emmiterFunctions,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(WaveformTypesContainer)