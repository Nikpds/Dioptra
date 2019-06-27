import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RadarAntenaTypesContainer = props => {
  const { children, history } = props
  const [radarAntenaTypes, setRadarAntenaTypes] = useState([])

  function onCreate() {
    history.push('/antenatransmittertypedetails/new')
  }

  function onEdit(id) {
    history.push(`/antenatransmittertypedetails/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/radarantenatype/${id}`)
    const index = radarAntenaTypes.findIndex(x => (x.id = id))
    radarAntenaTypes.splice(index, 1)
    setRadarAntenaTypes([...radarAntenaTypes])
  }

  useEffect(() => {
    async function fetchRadarAntenaTypes() {
      const response = await api.get('/api/lookup/radarantenatype')
      if (response && response.length > 0) {
        setRadarAntenaTypes(response)
      }
    }
    fetchRadarAntenaTypes()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      radarAntenaTypes,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(RadarAntenaTypesContainer)
