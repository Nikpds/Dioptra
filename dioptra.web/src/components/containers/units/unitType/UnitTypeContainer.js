import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitTypeContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [unitType, setUnitType] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/unitType/${id}`, value)
      if (response) {
        setUnitType(response)
      }
    } else {
      const response = await api.post(`/api/unitType`, value)
      if (response) {
        setUnitType(response)
        history.push('/unitType/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/UnitTypes')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/unitType/${id}`)
    history.push('/UnitTypes')
  }

  useEffect(() => {
    async function fetchType() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/unitType/${id}`)
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
