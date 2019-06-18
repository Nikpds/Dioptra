import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const ServerContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [server, setServer] = useState({ isActive: false, section: 0 })

  const onBack = () => {
    history.push('/servers')
  }

  function onCancel() {
    onBack()
  }

  async function onDelete() {
    const response = await api.delete(`/api/server/${server.id}`)
    if (response) {
      history.push('/servers')
    }
  }

  async function onSave(value) {
    if (value.id) {
      const response = await api.put('/api/server', value)
      if (response) {
        setServer(response)
      }
    } else {
      const response = await api.post('/api/server', value)
      if (response) {
        history.push(`/server/${response.id}`)
      }
    }
  }

  useEffect(() => {
    async function fetchServer() {
      if (id === 'new') {
        return
      }
      const response = await api.get(`/api/server/${id}`)
      if (response) {
        setServer({ ...response })
      }
    }
    fetchServer()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      onBack,
      onDelete,
      onCancel,
      onSave,
      server
    })
  )
}

export default withRouter(ServerContainer)
