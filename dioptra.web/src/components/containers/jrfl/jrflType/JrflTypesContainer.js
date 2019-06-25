import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const JrflTypesContainer = props => {
  const { children, history } = props
  const [jrflTypes, setJrflTypes] = useState([])

  function onCreate() {
    history.push('/jrfltype/new')
  }
  function onEdit(id) {
    history.push(`/jrfltype/${id}`)
  }
  async function onDelete(id) {
    await api.delete(`/api/lookup/jrfltype/${id}`)
    const index = jrflTypes.findIndex(x => (x.id = id))
    jrflTypes.splice(index, 1)
    setJrflTypes([...jrflTypes])
  }
  useEffect(() => {
    async function fetchJrflTypes() {
      const response = await api.get('/api/lookup/jrfltype')
      console.log(response)
      if (response) setJrflTypes(response)
    }

    fetchJrflTypes()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      jrflTypes,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(JrflTypesContainer)
