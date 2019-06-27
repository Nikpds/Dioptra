import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitMissionsContainer = props => {
  const { children, history } = props
  const [unitMissions, setUnitMissions] = useState([])

  function onCreate() {
    history.push('/unitmission/new')
  }
  
  function onEdit(id) {
    history.push(`/unitmission/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/unitmission/${id}`)
    const index = unitMissions.findIndex(x => (x.id = id))
    unitMissions.splice(index, 1)
    setUnitMissions([...unitMissions])
  }

  useEffect(() => {
    async function fetchUnitMissions() {
      const response = await api.get('/api/lookup/unitmission')
      if (response && response.length > 0) {
        setUnitMissions(response)
      }
    }
    fetchUnitMissions()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unitMissions,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(UnitMissionsContainer)
