import React from 'react'
import { Tag, Badge } from 'antd'

export const StatusTag = ({
  status,
  hasLabel = false,
  labels = { on: 'Active', off: 'Disable' },
  small = false
}) => {
  const lineHeight = small ? '15px' : '20px'
  if (hasLabel) {
    return (
      <Tag
        color={status ? 'green' : 'magenta'}
        style={{ lineHeight: lineHeight }}>
        {status ? labels.on : labels.off}
      </Tag>
    )
  } else {
    return <Badge status={status ? 'green' : 'magenta'} />
  }
}

export const LogTypeTag = {
  0: '#696969',
  1: '#008B8B',
  2: '#FFD700',
  3: '#C71585',
  4: '#FF0000',
  5: '#8B4513'
}
