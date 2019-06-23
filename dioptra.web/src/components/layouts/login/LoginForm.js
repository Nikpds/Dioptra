import React, { useState, useContext } from 'react'
import {
  Form,
  Input,
  Icon,
  Button,
  Dropdown,
  Menu,
  Divider,
  Typography
} from 'antd'
import { useAuth } from '../../../contexts/AuthProvider'
import {
  strings,
  LocalizationContext
} from '../../../contexts/LocalizationProvider'
import api from '../../../services/api'
import '../layout.less'
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
  const local = useContext(LocalizationContext)
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => local.changeLocalization('en')}>
        {strings.en}
      </Menu.Item>
      <Menu.Item key="2" onClick={() => local.changeLocalization('gr')}>
        {strings.gr}
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="login-flex-item">
      {/* <Avatar size={64} src={logo} shape="square" alt="Thales" /> */}
      <div className="login-title"> {strings.login.login}</div>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            name="username"
            autoComplete="username"
            placeholder={strings.login.username}
            size="default"
            prefix={<Icon type="user" />}
            value={username}
            onChange={evt => setUsername(evt.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            name="password"
            placeholder={strings.login.password}
            autoComplete="password"
            type="password"
            size="default"
            prefix={<Icon type="key" />}
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </Form.Item>       
        <Form.Item>
          <Button type="primary" size="default" htmlType="submit">
            {strings.login.login}
          </Button>
        </Form.Item>
        <Divider />
        <Dropdown overlay={menu} trigger={['click']}>
            <span className="is-link">
              <Icon type="global" /> {strings.language} <Icon type="down" />
            </span>
          </Dropdown>
        <Typography.Paragraph className="is-link" style={{ float: 'right' }}>
          {strings.login.version}: 2.2.0
        </Typography.Paragraph>        
      </Form>
    </div>
  )
}

export default LoginForm
