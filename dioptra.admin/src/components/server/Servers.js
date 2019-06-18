import React from 'react'
import PageHeader from '../shared/PageHeader'
import ServersContainer from '../containers/ServersContainer'
import { Button, Tooltip, Popconfirm, Card } from 'antd'
import Table from '../shared/Table'
import { StatusTag } from '../../services/Utilities'
const columns = [
  {
    title: 'Status',
    dataIndex: 'isActive',
    key: 'isActive',
    render: e => <StatusTag status={e} hasLabel />
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Contact Info',
    dataIndex: 'contactInfo',
    key: 'contactInfo'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password'
  }
]

const Servers = ({ servers, onCreate, onDelete, onEdit }) => {
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
        title="Servers"
        subtitle="view, edit, delete, create "
        actions={[
          {
            onClick: onCreate,
            name: 'Create',
            type: 'primary'
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Table columns={headers} data={servers} />
      </Card>
    </div>
  )
}

const ServersList = () => (
  <ServersContainer>
    <Servers />
  </ServersContainer>
)

export default ServersList
