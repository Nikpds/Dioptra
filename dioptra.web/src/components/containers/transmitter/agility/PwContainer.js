import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PwContainer = props => {
  const { children, history } = props
  const [pwAgilities, setPwAgilities] = useState([])

  function onCreate() {
    history.push('/agility/pw/new')
  }

  function onEdit(id) {
    history.push(`/agility/pw/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/agility/pw/${id}`)
    const index = pwAgilities.findIndex(x => (x.id = id))
    pwAgilities.splice(index, 1)
    setPwAgilities([...pwAgilities])
  }

  useEffect(() => {
    async function fetchPwAgilities() {
      const response = await api.get('/api/lookup/agility/pw')
      if (response && response.length > 0) {
        setPwAgilities(response)
      }
    }
    fetchPwAgilities()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      pwAgilities,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(PwContainer)