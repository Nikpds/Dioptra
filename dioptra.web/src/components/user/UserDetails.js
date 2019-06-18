import React, { useState, useEffect } from 'react'
import { strings } from '../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../shared/ActionHeader'
import UserContainer from '../containers/user/UserContainer'

const UserDetails = ({ onBack, onSave, onDelete, user, onCancel }) => {
  const [userDetails, setUserDetails] = useState(user)

  const userHandler = (name, value) => {
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setUserDetails(user)
  },[user])
  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title="Νεος Χρήστης"
        actions={[
          { onClick: onCancel, name: strings.user.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.user.delete,
            type: 'danger',
            show: !user.id
          },
          { onClick:()=> onSave(userDetails), name: strings.user.save }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.user.name}>
            <Input
              name="fullName"
              value={userDetails.fullName}
              onChange={e => userHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.user.username}>
            <Input
              name="userName"
              value={userDetails.userName}
              onChange={e => userHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.user.password}>
            <Input
              name="passwordHash"
              value={userDetails.passwordHash}
              onChange={e => userHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.user.phone}>
            <Input
              name="phone"
              value={userDetails.phone}
              onChange={e => userHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.user.email}>
            <Input
              name="email"
              value={userDetails.email}
              onChange={e => userHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
const UserForm = () => (
  <UserContainer>
    <UserDetails />
  </UserContainer>
)

export default UserForm
