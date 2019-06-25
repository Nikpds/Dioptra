import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const NationalityContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [nationality, setNationality] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/lookup/nationality/${id}`, value)
      if (response) {
        setNationality(response)
      }
    } else {
      const response = await api.post(`/api/lookup/nationality`, value)
      if (response) {
        setNationality(response)
        history.push('/nationality/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/nationalities/1/10')
  }
  function onCancel() {
    onBack()
  }
  async function onDelete() {
    await api.delete(`/api/lookup/nationality/${id}`)
    onBack()
  }

  useEffect(() => {
    async function fetchNationality() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/lookup/nationality/${id}`)
      setNationality(response)
    }
    fetchNationality()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      nationality,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(NationalityContainer)
