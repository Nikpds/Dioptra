import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitMissionsContainer = props => {
  const { children, history } = props
  const [unitmissions, setUnitmissions] = useState([])

  function onCreate() {
    history.push('/unitmisson/new')
  }
  
  function onEdit(id) {
    history.push(`/unitMision/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/unitMision/${id}`)
    const index = unitmissions.findIndex(x => (x.id = id))
    unitmissions.splice(index, 1)
    setUnitmissions([...unitmissions])
  }

  useEffect(() => {
    async function fetchUnitMissions() {
      const response = await api.get('/api/admin/unirmisssions')
      if (response && response.lenght > 0) {
        setUnitmissions(response)
      }
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
