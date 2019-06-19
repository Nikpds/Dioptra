import React from 'react'
import { Row, Col, Statistic } from 'antd'
import { StatusTag } from '../../services/Utilities'
import './server.less'
const Stat = ({ title, value, prefix = null, size = 24 }) => (
  <Statistic
    title={title}
    valueStyle={{ fontSize: size }}
    value={value}
    prefix={prefix}
  />
)
const ServerStats = ({ server }) => {
  const data = [
    {
      title: 'Application',
      font: 24,
      value: ' ',
      prefix: (
        <StatusTag
          hasLabel
          status={server.isActive}
          labels={{ on: 'Running', off: 'Down' }}
        />
      )
    },
    { title: 'Ram', font: 24, value: ' ', prefix: '' }
  ]

  return (
    <Row>
      {data.map(d => (
        <Col span={2} key={d.title}>
          <Stat
            title={d.title}
            valueStyle={{ fontSize: d.size }}
            prefix={d.prefix}
            value={d.value}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ServerStats
