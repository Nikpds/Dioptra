import React, { useState, useEffect } from 'react'
import {
  Form,
  Icon,
  Input,
  Switch,
  Select,
  Col,
  Card
} from 'antd'
import UserContainer from '../containers/UserContainer'
import PageHeader from '../shared/PageHeader'
import { StatusTag } from '../../services/Utilities'
import {roles} from '../../services/Enums'
const section = roles

const UserForm = ({ onCancel, onDelete, onSave, onBack, user }) => {
  const [_user, setUser] = useState(user)

  const inputChangeHandler = (name, value) => {
    setUser({
      ..._user,
      [name]: value
    })
  }

  useEffect(() => {
    setUser(user)
  }, [user])

  const title = _user.id ? _user.title : 'New UIser'
  const subtitle = _user.id ? (
    <StatusTag status={_user.status} hasLabel />
  ) : (
    'Please fill up all fields to add new user'
  )

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={subtitle}
        onBack={onBack}
        actions={[
          { onClick: onCancel, name: 'Cancel', type: 'default' },
          {
            onClick: onDelete,
            name: 'Delete',
            type: 'danger',
            show: !user.id
          },
          { onClick: () => onSave(_user), name: 'Save', type: 'primary' }
        ]}
      />
      <Card className="card-shadow" style={{ margin: '20px' }}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
          <Form.Item label="Full Name">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="fullname"
              value={_user.fullname}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="User Name">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="username"
              value={_user.username}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="password"
              type="password"
              value={_user.password}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="User Status">
            <Col span={12}>
              <Switch
                checked={_user.isActive}
                onChange={value => inputChangeHandler('isActive', value)}
                checkedChildren="User Enabled"
                unCheckedChildren="User Disabled"
              />
            </Col>
            <Col span={12}>
              <span>User Role : </span>
              <Select
                style={{ width: 120 }}
                value={_user.section}
                onChange={value => inputChangeHandler('section', value)}>
                {section.map(k => (
                  <Select.Option key={k.id} value={k.id}>
                    {k.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

const UserDetails = () => (
  <UserContainer>
    <UserForm />
  </UserContainer>
)

export default UserDetails
