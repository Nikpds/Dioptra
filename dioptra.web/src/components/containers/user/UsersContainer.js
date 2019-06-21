import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UsersContainer = props => {
  const { page, pageSize } = props.match.params
  const { children, history } = props
  const [users, setUsers] = useState({
    page: +page,
    pageSize: +pageSize,
    rows: []
  })

  function onCreate() {
    history.push('/user/new')
  }

  const onPaginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    history.push(`/users/${page}/${pageSize}`)
  }

  function onEdit(id) {
    history.push(`/user/${id}`)
  }

  async function onDelete(id) {
    await api.delete(`/api/user/${id}`)
    const index = users.findIndex(x => (x.id = id))
    users.splice(index, 1)
    setUsers([...users])
  }

  useEffect(() => {
    async function fetchUers() {
      const response = await api.get(`/api/user/${page}/${pageSize}`)
      if (response) setUsers(response)      
    }
    fetchUers()
  }, [page, pageSize])

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      users,
      onCreate,
      onEdit,
      onDelete,
      onPaginationChange
    })
  )
}

export default withRouter(UsersContainer)
