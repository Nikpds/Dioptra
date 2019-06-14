import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const ServerContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [server, setServer] = useState({ isActive: false, section: 0 })
  const cancel = () => {
    history.push('/servers')
  }

  async function deleteHandler() {
    console.log(server)
    const response = await api.delete(`/api/server/${server.id}`)
    if (response) {
      history.push('/servers')
    }
  }

  async function insert(server) {
    console.log(server)
    const response = await api.post('/api/server', server)
    if (response) {
      history.push(`/server/${response.id}`)
    }
  }

  async function update(server) {
    const response = await api.put('/api/server', server)
    if (response) {
      setServer(response)
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
      cancel,
      deleteHandler,
      insert,
      update,
      server
    })
  )
}

export default withRouter(ServerContainer)
