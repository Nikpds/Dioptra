import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const JrflTypeContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [jrflType, setJrflType] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/jrfltype/${id}`, value)
      if (response) {
        setJrflType(response)
      }
    } else {
      const response = await api.post(`/api/lookup/jrfltype`, value)
      if (response) {
        setJrflType(response)
        history.push('/jrflType/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/jrflTypes')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/lookup/jrfltype/${id}`)
    history.push('/jrflTypes')
  }

  useEffect(() => {
    async function fetchJrflType() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/jrfltype/${id}`)
      if (response) setJrflType(response)
    }
    fetchJrflType()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      jrflType,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(JrflTypeContainer)
