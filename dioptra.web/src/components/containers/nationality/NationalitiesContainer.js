import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const NationalitiesContainer = props => {
  const { page, pagesize } = props.match.params
  const { children, history } = props
  const [nationalities, setNationalities] = useState({
    page: +page,
    pagesize: +pagesize,
    rows: []
  })

  function onCreate() {
    history.push('/nationality/new')
  }

  const onPaginationChange = (page, pagesize) => {
    history.push(`/nationalities/${page}/${pagesize}`)
  }

  function onEdit(id) {
    history.push(`/nationality/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/lookup/nationality/${id}`)
    const index = nationalities.rows.findIndex(x => (x.id = id))
    nationalities.rows.splice(index, 1)
    setNationalities({ ...nationalities })
  }

  useEffect(() => {
    async function fetchNationalities() {
      const response = await api.get(
        `/api/lookup/nationality/${page}/${pagesize}`
      )
      if (response && response.rows.length > 0) setNationalities(response)
    }
    fetchNationalities()
  }, [page, pagesize])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      nationalities,
      onCreate,
      onEdit,
      onDelete,
      onPaginationChange
    })
  )
}

export default withRouter(NationalitiesContainer)
