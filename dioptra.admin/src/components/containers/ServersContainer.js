import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const ServersContainer = props => {
  const { children, history } = props
  const [servers, setServers] = useState([])

  function onCreate() {
    history.push('/server/new')
  }

  function onEdit(id) {
    history.push(`/server/${id}`)
  }

  async function onDelete(id) {
    const response = await api.delete(`/api/server/${id}`)
    if (response) {
      const i = servers.findIndex(x => x.id === id)
      servers.splice(i, 1)
      setServers([...servers])
    }
  }

  useEffect(() => {
    async function fetchServers() {
      const response = await api.get('/api/server')
      setServers(response)
    }
    fetchServers()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      servers,
      onCreate,
      onDelete,
      onEdit
    })
  )
}

export default withRouter(ServersContainer)
