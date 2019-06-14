import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const ServerContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [server, setServer] = useState({ isActive: false, section: 0 })

  const cancel = () => {
    history.back()
  }

  async function deleteHandler() {
    console.log('Delete: ' + server)
    const response = await api.delete(`/api/server/${server.id}`)
    if (response) {
      console.log(response)
    }
  }

  async function insert(server) {
    console.log(server)
    // const response = await api.post('/api/server', server)
    // if (response) {
    //   history.push(`/server/${response.id}`)
    // }
  }

  async function update(server) {
    console.log(server)
    const response = await api.put('/api/server', server)
    if (response) {
      console.log(response)
    }
  }

  useEffect(() => {
    async function fetchServer() {
      if (id === 'new') {
        return
      }
      const response = await api.get('/api/server')
      if (response) {
        console.log(response)
        setServer(response)
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
