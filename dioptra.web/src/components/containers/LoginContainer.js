import React from 'react'
import { Col, Row } from 'antd'
import LoginInfo from '../layouts/login/LoginInfo'
import LoginForm from '../layouts/login/LoginForm'

const LoginContainer = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="login-container">
      <Col className="login-details" span={9}>
        <div className="login-details-overlay" />
        <LoginInfo />
      </Col>
      <Col className="login-form" span={6}>
        <LoginForm />
      </Col>
    </Row>
  )
}

export default LoginContainer
