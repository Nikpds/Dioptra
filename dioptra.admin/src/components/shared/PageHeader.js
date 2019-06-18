import React from 'react'
import { PageHeader, Button } from 'antd'
import './shared.less'

const ActionHeader = props => {
  return (
    <PageHeader
      className="actionheader"
      onBack={props.onBack}
      title={props.title}
      subTitle={props.subtitle ? props.subtitle : null}
      extra={props.actions.map((btn, index) =>
        !btn.show ? (
          <Button
            key={index}
            type={btn.type ? btn.type : 'primary'}
            size="small"
            onClick={btn.onClick}>
            {btn.name}
          </Button>
        ) : null
      )}
      footer={props.footer ? props.footer : null}
    />
  )
}
export default ActionHeader
