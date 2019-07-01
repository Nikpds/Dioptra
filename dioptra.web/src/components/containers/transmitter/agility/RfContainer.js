import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RfContainer = props => {
  const { children, history } = props
  const [rfAgilities, setrfagilities] = useState([])

  function onCreate() {
    history.push('/agility/rf/new')
  }

  function onEdit(id) {
    history.push(`/agility/rf/${id}`)
  }

  async function onDelete(id) {
    // για αλλαγή όταν γίνουν οι κλήσεις
    await api.delete(`/api/lookup/agility/rf/${id}`)
    const index = rfAgilities.findIndex(x => (x.id = id))
    rfAgilities.splice(index, 1)
    setrfagilities([...rfAgilities])
  }

  useEffect(() => {
    async function fetchrfagilities() {
      const response = await api.get('/api/lookup/agility/rf')
      if (response && response.length > 0) {
        setrfagilities(response)
      }
    }
    fetchrfagilities()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      rfAgilities,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(RfContainer)
