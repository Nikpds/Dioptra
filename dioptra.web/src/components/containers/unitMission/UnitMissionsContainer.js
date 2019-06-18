import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UnitMissionsContainer = props => {
  const { children, history } = props
  const [unitmissions, setUnitmissions] = useState([])

  function onCreate() {
    history.push('/UnitMissionDetails/new')
  }

  function onEdit(unitMision) {
    history.push(`/unitMision/${unitMision.id}`)
  }

  async function onDelete(unitMision) {
    await api.delete(`/api/unitMision/${unitMision.id}`)
    const index = unitMision.findIndex(x => (x.id = unitMision.id))
    unitMision.splice(index, 1)
    setUnitmissions([...Unitmissions])
  }

  useEffect(() => {
    async function fetchUnitMissions() {
      const _unitMissions = await api.get('/api/admin/unirmisssions')
      setUnitmissions(_unitMissions)
    }
    fetchUnitMissions()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unitmissions,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(UnitMissionsContainer)
