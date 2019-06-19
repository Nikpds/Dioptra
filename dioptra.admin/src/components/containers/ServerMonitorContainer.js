import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { api } from 'mis-react'

const ServerMonitorContainer = props => {
  const { children, history } = props
  const { id } = props.match.params
  const [server, setServer] = useState({})

  const onBack = () => {
    history.push('/dashboard')
  }

  function onCancel() {
    onBack()
  }

  async function fetchServer() {
    const response = await api.get(`/api/server/${id}`)
    if (response) {
      setServer({ ...response })
    }
  }

  useEffect(() => {
    fetchServer()
  }, [id])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      onBack,
      onCancel,
      server,
      fetchServer
    })
  )
}

export default withRouter(ServerMonitorContainer)
