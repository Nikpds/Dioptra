import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UserContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [user, setUser] = useState({})

  async function onSave(value) {
    if (value.id) {
      const response = await api.put(`/api/user/${id}`, value)
      if (response) {
        setUser(response)
      }
    } else {
      const response = await api.post(`/api/user`, value)
      if (response) {
        setUser(response)
        history.push('/user/' + response.id)
      }
    }
  }

  function onBack() {
    history.push('/users')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/user/${id}`)
    history.push('/users')
  }

  useEffect(() => {
    async function fetchUser() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/user/${id}`)
      setUser(response)
    }

    fetchUser()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      user,
      onBack,
      onCancel,
      onSave,
      onDelete
    })
  )
}

export default withRouter(UserContainer)
