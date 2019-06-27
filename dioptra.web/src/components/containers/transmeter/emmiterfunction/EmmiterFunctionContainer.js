import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const EmmiterFunctionContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [emmiterFunction, setEmmiterFunction] = useState({})
  
    async function onSave(value) {
      if (value.id) {
        const response = await api.put(`/api/lookup/emmiterfunction/${id}`, value)
        if (response) {
            setEmmiterFunction(response)
        }
      } else {
        const response = await api.post(`/api/lookup/emmiterfunction`, value)
        if (response) {
            setEmmiterFunction(response)
          history.push('/emmiterfunction/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/EmmiterFunctions')
    }
    function onCancel() {
      onBack()
    }
    async function onDelete() {
      await api.delete(`/api/lookup/emmiterfunction/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchEmmiterFunction() {
        if (id === 'new') {
          return
        }
        const response = await api.get(`/api/lookup/emmiterfunction/${id}`)
        setEmmiterFunction(response)
      }
      fetchEmmiterFunction()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        emmiterFunction,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(EmmiterFunctionContainer)