import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const UsersContainer = props => {
  const { children, history } = props
  const [users, setUsers] = useState([])

  function onCreate() {
    history.push('/user/new')
  }

  function onEdit(id) {
    history.push(`/user/${id}`)
  }

  async function onDelete(id) {
    const response = await api.delete(`/api/user/${id}`)
    if (response) {
      const i = users.findIndex(x => x.id === id)
      users.splice(i, 1)
      setUsers([...users])
    }
  }
  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get('/api/user')
      setUsers(response)
    }
    fetchUsers()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      users,
      onCreate,
      onDelete,
      onEdit
    })
  )
}

export default withRouter(UsersContainer)
