import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UserContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const [user, setUser] = useState({})

  async function onSave() {
    if (user.id) {
      await api.put(`/api/admin/users/${id}`, user)
    } else {
      await api.post(`/api/admin/users`, user)
    }
  }

  function onBack() {
    history.push('/users')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    await api.delete(`/api/admin/users/${id}`)
    history.push('/admin/users')
  }

  useEffect(() => {
    async function fetchUser() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/admin/users/${id}`)
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
