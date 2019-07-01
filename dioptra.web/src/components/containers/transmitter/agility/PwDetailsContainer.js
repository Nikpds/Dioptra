import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PwDetailsContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [pwAgility, setPwAgility] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/agility/pw/${id}`, value)
      if (response) {
        setPwAgility(response)
      }
    } else {
      const response = await api.post(`/api/lookup/agility/pw`, value)
      if (response) {
        setPwAgility(response)
        history.push('/agility/pw/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/agilities/pw')
  }
  function onCancel() {
    onBack()
  }
  async function onDelete() {
    await api.delete(`/api/lookup/agility/pw/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchPwAgility() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/agility/pw/${id}`)
      if (response) setPwAgility(response)
    }
    fetchPwAgility()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      pwAgility,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(PwDetailsContainer)
