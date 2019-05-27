import React from 'react'
import { Col, Typography, Row, Avatar } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import logo from '../../../assets/logo.png'
import '../layout.less'
const LoginHeader = () => {
  return (
    <Row
      className="login-header-background"
      style={{ height: '80px' }}
      type="flex"
      justify="space-around"
      align="middle">
      <Col span={22}>
        <Typography.Title
          level={3}
          type="secondary"
          style={{ marginBottom: 0 }}>
          <img src={logo} alt={strings.app} />
          {strings.app}
        </Typography.Title>
        <Typography.Paragraph
          strong={true}
          style={{ marginBottom: 0, color: 'white', marginLeft: 10 }}>
          {strings.login.loginSubtitle}
        </Typography.Paragraph>
      </Col>
    </Row>
  )
}

export default LoginHeader
