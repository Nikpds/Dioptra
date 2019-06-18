import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const JrflTypesContainer = props => {
  const { children, history } = props
  const [jrflTypes, setJrflTypes] = useState([])

  function onCreate() {
    history.push('/JrflType/new')
  }
  function onEdit(JrflType) {
    history.push(`/unitMision/${JrflType.id}`)
  }
  async function onDelete(JrflType) {
    await api.delete(`/api/unitMision/${JrflType.id}`)
    const index = jrflTypes.findIndex(x => (x.id = JrflType.id))
    jrflTypes.splice(index, 1)
    setUnitmissions([...jrflTypes])
  }
  useEffect(() => {
    async function fetchJrflTypes() {
      const _jrflTypes = await api.get('/api/admin/jrfltypes')
      setJrflTypes(_jrflTypes)
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
