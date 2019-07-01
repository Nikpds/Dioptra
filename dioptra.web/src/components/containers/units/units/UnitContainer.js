import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [unit, setUnit] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/unit/${id}`, value)
      if (response) {
        setUnit(response)
      }
    } else {
      const response = await api.post(`/api/unit`, value)
      if (response) {
        setUnit(response)
        history.push('/unit/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/units/1/10')
  }
  function onCancel() {
    onBack()
  }
  async function onDelete() {
    await api.delete(`/api/unit/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchUnit() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/unit/${id}`)
      if (response) setUnit(response)
    }
    fetchUnit()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      unit,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(UnitContainer)
