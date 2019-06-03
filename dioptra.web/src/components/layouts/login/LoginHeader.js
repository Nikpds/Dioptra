import React, { useContext } from 'react'
import { Col, Typography, Row, Dropdown, Icon, Menu } from 'antd'
import {
  strings,
  LocalizationContext
} from '../../../contexts/LocalizationProvider'
import logo from '../../../assets/logo.png'
import '../layout.less'
const LoginHeader = () => {
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
    <Row
      className="login-header-background"
      style={{ height: '80px' }}
      type="flex"
      justify="space-around"
      align="middle">
      <Col span={20}>
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
      <Col span={2}>
        <Dropdown overlay={menu} trigger={['click']}>
          <span className="is-link">
            <Icon type="global" /> {strings.language} <Icon type="down" />
          </span>
        </Dropdown>
      </Col>
    </Row>
  )
}

export default LoginHeader
