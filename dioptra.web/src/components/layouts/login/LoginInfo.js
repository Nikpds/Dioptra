import React from 'react'
import { Typography, Icon } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'

const LoginInfo = () => {
  const thisYear = new Date().getFullYear()
  return (
    <div className="login-details-text login-flex-item">
      <div style={{ textAlign: 'center', color: 'white' }}>
        <Icon type="warning" style={{ fontSize: 30 }} />
        <p style={{ fontSize: 20 }}> {strings.login.warning}</p>
      </div>
      <Typography.Paragraph
        strong
        style={{ textAlign: 'justify', color: 'lightgrey' }}>
        <Typography.Title />
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

      <Typography.Paragraph style={{ color: 'lightgrey', textAlign: 'center' }}>
        Copyright © 2015-{thisYear}, ΚΜΗ/ΓΕΑ
      </Typography.Paragraph>    
    </div>
  )
}

export default LoginInfo
