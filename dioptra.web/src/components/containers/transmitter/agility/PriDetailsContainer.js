import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PriDetailsContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [priAgility, setPriAgility] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/agility/pri/${id}`, value)
      if (response) {
        setPriAgility(response)
      }
    } else {
      const response = await api.post(`/api/lookup/agility/pri`, value)
      if (response) {
        setPriAgility(response)
        history.push('/agilities/pri/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/agilities/pri')
  }
  function onCancel() {
    onBack()
  }
  async function onDelete() {
    await api.delete(`/api/lookup/agility/pri/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchPriAgility() {
      if (id === 'new') {
        return
      }
      console.log('in')
      const response = await api.get(`/api/lookup/agility/pri/${id}`)
      if (response) setPriAgility(response)
    }
    fetchPriAgility()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      priAgility,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(PriDetailsContainer)
