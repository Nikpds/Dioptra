import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const ScanFunctionContainer = props => {
    const { id } = props.match.params
    const { children, history } = props
    const [scanFunction, setScanFunction] = useState({})
  
    async function onSave(value) {
      if (value.id) {
        const response = await api.put(`/api/lookup/scan/function/${id}`, value)
        if (response) {
          setScanFunction(response)
        }
      } else {
        const response = await api.post(`/api/lookup/scan/function`, value)
        if (response) {
          setScanFunction(response)
          history.push('/scanfunction/' + response.id)
        }
      }
    }
  
    function onBack() {
      history.push('/ScanFunctions')
    }
    function onCancel() {
      onBack()
    }
    async function onDelete() {
      await api.delete(`/api/lookup/scan/function/${id}`)
      onBack()
    }
  
    useEffect(() => {
      async function fetchScanFunction() {
        if (id === 'new') {
          return
        }
        const response = await api.get(`/api/lookup/scan/function/${id}`)
        setScanFunction(response)
      }
      fetchScanFunction()
    }, [id])
  
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        scanFunction,
        onBack,
        onCancel,
        onSave,
        onDelete
      })
    )
  }
  
  export default withRouter(ScanFunctionContainer)