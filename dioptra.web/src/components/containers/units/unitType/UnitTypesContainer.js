import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitTypesContainer = props => {
  const { children, history } = props
  const [unitTypes, setUnitTypes] = useState([])

  function onCreate() {
    history.push('/unittype/new')
  }

  function onEdit(id) {
    history.push(`/unittype/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/unittype/${id}`)
    const index = unitTypes.findIndex(x => (x.id = id))
    unitTypes.splice(index, 1)
    setUnitTypes([...unitTypes])
  }

  useEffect(() => {
    async function fetchUnitTypes() {
      const response = await api.get('/api/lookup/unittype')
      if (response && response.length > 0) {
        setUnitTypes(response)
      }
    }
    fetchUnitTypes()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unitTypes,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(UnitTypesContainer)
