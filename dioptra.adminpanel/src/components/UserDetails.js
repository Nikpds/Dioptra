import React, { useState } from 'react'

import {
  Form,
  Icon,
  Input,
  Button,
  Switch,
  Radio,
  Mentions,
  Col,
  Row
} from 'antd'

const UserDetails = props => {
  const [user, setUser] = useState(props.user)
  //user.id='1'
  let title = user.id ? user.userName : 'Νέος Χρήστης'

  return (
    <div>
      <Form>
        <h1>{title}</h1>
        <Form.Item>
          <Col span={5}>Όνομα: </Col>
          <Col span={16}>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="Όνομα Χρήστη"
              name="userName"
              value={user.userName}
              // onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Col>
        </Form.Item>
        <Form.Item>
          <Col span={5}>Επώνυμο: </Col>
          <Col span={16}>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="Επώνυμο Χρήστη"
              name="userSName"
              value={user.userSName}
              // onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Col>
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={5}>User ID: </Col>
            <Col span={3}>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                placeholder="Κωδικός Χρήστη"
                name="userId"
                value={user.userId}
                disabled
                // onChange={e => inputChangeHandler(e.target.name, e.target.value)}
              />
            </Col>
            <Col span={5}>Ρόλος: </Col>
            <Col span={8}>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                placeholder="Ρόλος Χρήστη"
                name="userRole"
                value={user.userRole}
                // onChange={e => inputChangeHandler(e.target.name, e.target.value)}
              />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserDetails
