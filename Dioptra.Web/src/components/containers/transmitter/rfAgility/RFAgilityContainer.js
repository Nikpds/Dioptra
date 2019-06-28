import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const RFAgilityContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [rfAgility, setrfAgility] = useState({})
    async function onSave(value) {
      if (value.id) {
        // για αλλαγή όταν γίνουν οι κλήσεις
        const response = await api.put(`/api/lookup/rfagility/${id}`,value)
        if (response) {
            setrfAgility(response)
        }
      } else {
        // για αλλαγή όταν γίνουν οι κλήσεις
        const response = await api.post(`/api/lookup/radarantenatype/${id}`,value)
        if (response) {
            setrfAgility(response)
          history.push('/rfagility/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/rfagilities')
    }
  
    function onCancel() {
      onBack()
    }
  
    async function onDelete() {
      // για αλλαγή όταν γίνουν οι κλήσεις
      await api.delete(`/api/lookup/rfagility/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchrfagility() {
        if (id === 'new') {
          return
        }
        // για αλλαγή όταν γίνουν οι κλήσεις
        const response = await api.get(`/api/lookup/rfagility/${id}`)
        fetchrfagility(response)
      }
      fetchrfagility()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        rfAgility,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(RFAgilityContainer)
  