import React from 'react'
import UsersContainer from '../containers/user/UsersContainer'
import { Button, Divider } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
import ActionHeader from '../shared/ActionHeader'
import SSPTable from '../shared/SSPTable'

const UserList = ({
  users,
  onCreate,
  onEdit,
  onDelete,
  onPaginationChange
}) => {
  const headers = [
    {
      title: strings.users.fullname,
      dataIndex: 'fullName',
      key: 'fullname'
    },
    {
      title: strings.users.unit,
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: strings.users.username,
      dataIndex: 'userName',
      key: 'username'
    },
    {
      title: strings.users.email,
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: strings.users.phone,
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: strings.buttons.tableActions,
      dataIndex: 'actions',
      key: 'actions',
      render: (e, row) => [
        <Button
          key={1}
          type="danger"
          shape="circle"
          icon="delete"
          size="small"
          onClick={() => onDelete(row.id)}
        />,
        <Divider key={2} type="vertical" />,
        <Button
          key={3}
          type="default"
          shape="circle"
          icon="form"
          size="small"
          onClick={() => onEdit(row.id)}
        />
      ]
    }
  ]

  return (
    <div>
      <ActionHeader
        title={strings.users.headerTitle}
        subtitle={users.rows.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.users.create,
            type: 'primary'
          }
        ]}
      />
      <SSPTable
        data={users}
        columns={headers}
        onPaginationChange={onPaginationChange}
      />
    </div>
  )
}

const Users = () => (
  <UsersContainer>
    <UserList />
  </UsersContainer>
)
export default Users
