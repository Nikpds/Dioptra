import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UsersContainer = props => {
  const { page, pagesize } = props.match.params
  const { children, history } = props
  const [users, setUsers] = useState({
    page: +page,
    pagesize: +pagesize,
    rows: []
  })

  function onCreate() {
    history.push('/user/new')
  }

  const onPaginationChange = (page, pagesize) => {
    history.push(`/users/${page}/${pagesize}`)
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
      const response = await api.get(`/api/user/${page}/${pagesize}`)
      if (response) setUsers(response)      
    }
    fetchUers()
  }, [page, pagesize])

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
