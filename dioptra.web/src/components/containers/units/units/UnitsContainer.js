import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../../services/api'

const UnitsContainer = props => {
  const { page, pagesize } = props.match.params
  const { children, history } = props
  const [units, setUnits] = useState({
    page: +page,
    pagesize: +pagesize,
    rows: []
  })
  function onCreate() {
    history.push('/unit/new')
  }

  const onPaginationChange = (page, pagesize) => {
    history.push(`/units/${page}/${pagesize}`)
  }

  function onEdit(id) {
    history.push(`/unit/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/unit/${id}`)
    const index = units.rows.findIndex(x => (x.id = id))
    units.rows.splice(index, 1)
    setUnits({ ...units })
  }

  useEffect(() => {
    async function fetchUnits() {
      const response = await api.get(`/api/unit/${page}/${pagesize}`)
      if (response && response.rows.length > 0) setUnits(response)
    }
    fetchUnits()
  }, [page, pagesize])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      units,
      onCreate,
      onEdit,
      onDelete,
      onPaginationChange
    })
  )
}

export default withRouter(UnitsContainer)
