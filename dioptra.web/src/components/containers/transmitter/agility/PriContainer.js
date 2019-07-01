import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PriContainer = props => {
  const { children, history } = props
  const [priAgilities, setPriAgilities] = useState([])

  function onCreate() {
    history.push('/agility/pri/new')
  }

  function onEdit(id) {
    history.push(`/agility/pri/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/agility/pri/${id}`)
    const index = priAgilities.findIndex(x => (x.id = id))
    priAgilities.splice(index, 1)
    setPriAgilities([...priAgilities])
  }

  useEffect(() => {
    async function fetchPriAgilities() {
      const response = await api.get('/api/lookup/agility/pri')
      if (response && response.length > 0) {
        setPriAgilities(response)
      }
    }
    fetchPriAgilities()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      priAgilities,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(PriContainer)