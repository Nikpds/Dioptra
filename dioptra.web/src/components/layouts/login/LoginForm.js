import React, { useState } from 'react'
import { Form, Card, Input, Icon, Button, Avatar } from 'antd'
import { useAuth } from '../../../contexts/AuthProvider'
import api from '../../../services/api'
import '../layout.less'
import logo from '../../../assets/ThalesLogo.png'

const LoginForm = () => {
  const auth = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()
    const response = await api.post('/api/auth/token', { username, password })
    if (response && response.token) {
      auth.signIn(response.token)
    }
  }

  return (
    <Card className="loginCard">
      <span className="b1" />
      <span className="b2" />
      <span className="b3" />
      <span className="b4" />
      <div style={{ textAlign: 'center' }}>
        <Avatar size={124} src={logo} shape="square" alt="Thales" />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Username">
          <Input
            name="username"
            autoComplete="username"
            size="large"
            prefix={<Icon type="user" />}
            value={username}
            onChange={evt => setUsername(evt.target.value)}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            name="password"
            autoComplete="password"
            type="password"
            size="large"
            prefix={<Icon type="key" />}
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block size="large" htmlType="submit">
            login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default LoginForm
