import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitTypesContainer = props => {
  const { children, history } = props
  const [unitTypes, setUnitTypes] = useState([])

  function onCreate() {
    history.push('/unitType/new')
  }
  console.log(unitTypes)
  
  function onEdit(unitType) {
    history.push(`/unitType/${unitType.id}`)
  }

  async function onDelete(unitType) {
    await api.delete(`/api/unitType/${unitType.id}`)
    const index = unitTypes.findIndex(x => (x.id = unitType.id))
    unitTypes.splice(index, 1)
    setUnitTypes([...unitTypes])
  }

  useEffect(() => {
    async function fetchUnitTypes() {
      const response = await api.get('/api/admin/unittypes')
      if (response && response.lenght > 0) {
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
