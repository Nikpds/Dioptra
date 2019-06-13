import React, { useState } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.login(username, password)
  }
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col span={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={evt => setUsername(evt.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              onChange={evt => setPassword(evt.target.value)}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
