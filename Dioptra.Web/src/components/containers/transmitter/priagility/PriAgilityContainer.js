import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PriAgilityContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [priAgility, setPriAgility] = useState({})
  
    async function onSave(value) {
      if (value.id) {
        const response = await api.put(`/api/lookup/scan/function/${id}`, value)
        if (response) {
            setPriAgility(response)
        }
      } else {
        const response = await api.post(`/api/lookup/scan/function`, value)
        if (response) {
            setPriAgility(response)
          history.push('/priagility/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/PriAgilities')
    }
    function onCancel() {
      onBack()
    }
    async function onDelete() {
      await api.delete(`/api/lookup/scan/function/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchPriAgility() {
        if (id === 'new') {
          return
        }
        const response = await api.get(`/api/lookup/scan/function/${id}`)
        setPriAgility(response)
      }
      fetchPriAgility()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        priAgility,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(PriAgilityContainer)