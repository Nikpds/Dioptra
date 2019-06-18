import React from 'react'
import PageHeader from '../shared/PageHeader'
import UsersContainer from '../containers/UsersContainer'
import { Button, Tooltip, Popconfirm, Card } from 'antd'
import Table from '../shared/Table'
import { StatusTag } from '../../services/Utilities'

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'fullname',
    key: 'fullname'
  },
  {
    title: 'User Name',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password'
  },
  {
    title: 'Status',
    dataIndex: 'isActive',
    key: 'isActive',
    render: e => <StatusTag status={e} hasLabel />
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  }
]

const Users = ({ users, onCreate, onDelete, onEdit }) => {

    const headers = [
        ...columns,
        {
          title: 'Actions',
          key: 'action',
          render: (e, row) => (
            <div>
              <Tooltip title="Edit">
                <Button
                  size="small"
                  type="ghost"
                  shape="circle"
                  icon="form"
                  onClick={() => onEdit(row.id)}
                />
              </Tooltip>
              &nbsp;
              <Popconfirm
                title="Are you sure ?"
                onConfirm={() => onDelete(row.id)}
                onCancel={null}
                okText="Yes"
                cancelText="No">
                <Tooltip title="Delete">
                  <Button size="small" type="danger" shape="circle" icon="delete" />
                </Tooltip>
              </Popconfirm>
            </div>
          )
        }
      ]

  return (     
  <div>
      <PageHeader
        title="Users"
        subtitle="users..."
        actions={[
            {
                onClick: onCreate,
                name: 'Create',
                type: 'primary'
        }
        ]}
      />
      <Card style={{margin:20}} className="has-shadow">
        
      </Card>
  </div>
  )
}

const UserList = () => (
    <UsersContainer>
        <Users/>
    </UsersContainer>
)

export default UserList


      