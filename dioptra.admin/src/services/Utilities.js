import React from 'react'
import { Tag, Badge } from 'antd'

export const StatusTag = ({ status, hasLabel = false, small = false }) => {
  const lineHeight = small ? '15px' : '20px'
  if (hasLabel) {
    return (
      <Tag
        color={status ? 'green' : 'magenta'}
        style={{ lineHeight: lineHeight }}>
        {status ? 'Active' : 'Disable'}
      </Tag>
    )
  } else {
    return <Badge status={status ? 'green' : 'magenta'} />
  }
}
