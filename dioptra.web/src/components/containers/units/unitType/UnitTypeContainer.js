import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitTypeContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [unitType, setUnitType] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/unittype/${id}`, value)
      if (response) {
        setUnitType(response)
      }
    } else {
      const response = await api.post(`/api/lookup/unittype`, value)
      if (response) {
        setUnitType(response)
        history.push('/unittype/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/unittypes')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/lookup/unittype/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchType() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/unittype/${id}`)
      setUnitType(response)
    }

    fetchType()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unitType,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(UnitTypeContainer)
