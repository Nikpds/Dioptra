import React from 'react'
import { PageHeader, Button, Popconfirm } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
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
          btn.isDelete ? (
            <Popconfirm
              key={index}
              title={strings.popconfirm.title}
              onConfirm={btn.onClick}
              onCancel={null}
              okText={strings.popconfirm.confirm}
              cancelText={strings.popconfirm.cancel}>
              <Button type={btn.type ? btn.type : 'primary'} size="small">
                {btn.name}
              </Button>
            </Popconfirm>
          ) : (
            <Button
              key={index}
              type={btn.type ? btn.type : 'primary'}
              size="small"
              onClick={btn.onClick}>
              {btn.name}
            </Button>
          )
        ) : null
      )}
      footer={props.footer ? props.footer : null}
    />
  )
}
export default ActionHeader
