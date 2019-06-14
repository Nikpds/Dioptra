import React from 'react'
import { Tag, Badge } from 'antd'

export const StatusTag = ({ status, hasLabel = false }) => {
  if (hasLabel) {
    return (
      <Tag color={status ? 'green' : 'magenta'}>
        {status ? 'Active' : 'Disable'}
      </Tag>
    )
  } else {
    return <Badge status={status ? 'green' : 'magenta'} />
  }
}
