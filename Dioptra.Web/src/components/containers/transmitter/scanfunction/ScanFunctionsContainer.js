import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const ScanFunctionsContainer = props => {
  const { children, history } = props
  const [scanFunctions, setScanFunctions] = useState([])

  function onCreate() {
    history.push('/scanfunction/new')
  }

  function onEdit(id) {
    history.push(`/scanfunction/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/scan/function/${id}`)
    const index = scanFunctions.findIndex(x => (x.id = id))
    scanFunctions.splice(index, 1)
    setScanFunctions([...scanFunctions])
  }

  useEffect(() => {
    async function fetchScanFunctions() {
      const response = await api.get('/api/lookup/scan/function')
      if (response && response.length > 0) {
        setScanFunctions(response)
      }
    }
    fetchScanFunctions()
  }, [])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      scanFunctions,
      onCreate,
      onEdit,
      onDelete
    })
  )
}

export default withRouter(ScanFunctionsContainer)