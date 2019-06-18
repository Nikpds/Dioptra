import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const UserContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [user, setUser] = useState({})

  const onBack = () => {
    history.push('/users')
  }
  const onCancel = () => {
    onBack()
  }

  async function onDelete() {
    const response = await api.delete(`/api/user/${user.id}`)
    if (response) {
      console.log(response)
      history.push('/users')
    }
  }

  async function onSave(value) {
    if(value.id){
      const response = await api.put('/api/user',value);
      if(response){
        setUser(response)
      }
    } else {
      const response = await api.post('/api/user',value)
      if(response){
        history.push(`/user/${response.id}`)
      }
    }
  }

  useEffect(() => {
    async function fetchUser() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/user/${id}`)
      if (response) {
        setUser({ ...response })
      }
    }
    fetchUser()
  }, [id])


  return React.Children.map(children, child =>
    React.cloneElement(child, {
      onBack,
      onDelete,
      onCancel,
      onSave,
      user
    })
  )
}

export default withRouter(UserContainer)
