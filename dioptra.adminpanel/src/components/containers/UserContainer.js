import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'
const UserContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [user, setUser] = useState({})

  const cancel = () => {
    history.goBack()
  }

  async function deleteHandler() {
    const response = await api.delete(`/api/user/${user.id}`)
    if (response) {
      console.log(response)
    }
  }

  async function insert(user) {
    const response = await api.post('/api/user', user)
    if (response) {
      history.push(`/user/${response.id}`)
    }
  }

  async function update(user) {
    console.log('Update: ' + user)
    const response = await api.put('/api/user', user)
    if (response) {
      console.log(response)
    }
  }

  useEffect(() => {
    async function fetchUser() {
      if (id === 'new') {
        return
      }
      const response = await api.get('/api/user')
      if (response) {
        console.log(response)
        setUser(response)
      }
    }
    fetchUser()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      cancel,
      deleteHandler,
      insert,
      update,
      user
    })
  )
}

export default withRouter(UserContainer)
