import React from 'react'
import { Col, Typography, Row } from 'antd'
import LoginForm from './LoginForm'
import { strings } from '../../../contexts/LocalizationProvider'

const LoginInfo = () => {
  const thisYear = new Date().getFullYear()
  return (
    <div style={{ height: 'calc(100vh - 80px)' }}>
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        className="login-content-background"
        style={{ height: 'calc(100vh - 140px)' }}>
        <Col span={10}>
          <Typography.Paragraph
            strong
            style={{ textAlign: 'justify', color: 'lightgrey' }}>
            <Typography.Title underline={true} style={{ color: 'white' }}>
              {strings.login.warning}
            </Typography.Title>
            {strings.login.warningmessage1}{' '}
            <Typography.Text strong style={{ color: 'red' }}>
              {strings.login.classafied}
            </Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph
            strong
            style={{ textAlign: 'justify', color: 'lightgrey' }}>
            {strings.login.warningmessage2}
            <ul style={{ marginLeft: 20, marginTop: 10 }}>
              <li> {strings.login.warningmessage3}</li>
              <li> {strings.login.warningmessage4} </li>
              <li> {strings.login.warningmessage5}</li>
            </ul>
          </Typography.Paragraph>
        </Col>
        <Col span={8}>
          <LoginForm />
        </Col>
      </Row>
      <Row
        className="login-header-background"
        style={{ height: '80px' }}
        type="flex"
        justify="space-around"
        align="middle">
        <Col span={10}>
          <Typography.Paragraph style={{ color: 'lightgrey' }}>
            Copyright © 2015-{thisYear}, ΚΜΗ/ΓΕΑ
          </Typography.Paragraph>
        </Col>
        <Col span={10}>
          <Typography.Paragraph style={{ color: 'lightgrey', float: 'right' }}>
            {strings.login.version}: 2.2.0
          </Typography.Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default LoginInfo
