import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RfDetailsContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [rfAgility, setrfAgility] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/agility/rf/${id}`, value)
      if (response) {
        setrfAgility(response)
      }
    } else {
      const response = await api.post(`/api/lookup/agility/rf`, value)
      if (response) {
        setrfAgility(response)
        history.push('/agility/rf/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/agilities/rf')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/lookup/agility/rf/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchrfagility() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/agility/rf/${id}`)
      if (response) fetchrfagility(response)
    }
    fetchrfagility()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      rfAgility,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(RfDetailsContainer)
