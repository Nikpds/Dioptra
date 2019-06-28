import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const PwAgilityContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [pwAgility, setPwAgility] = useState({})
  
    async function onSave(value) {
      if (value.id) {
        const response = await api.put(`/api/lookup/scan/function/${id}`, value)
        if (response) {
            setPwAgility(response)
        }
      } else {
        const response = await api.post(`/api/lookup/scan/function`, value)
        if (response) {
            setPwAgility(response)
          history.push('/pwagility/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/PwAgilities')
    }
    function onCancel() {
      onBack()
    }
    async function onDelete() {
      await api.delete(`/api/lookup/scan/function/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchPwAgility() {
        if (id === 'new') {
          return
        }
        const response = await api.get(`/api/lookup/scan/function/${id}`)
        setPwAgility(response)
      }
      fetchPwAgility()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        pwAgility,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(PwAgilityContainer)