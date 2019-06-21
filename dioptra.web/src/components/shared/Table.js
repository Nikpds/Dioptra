import React from 'react'
import { Table } from 'antd'

const Table = ({ columns, data, keySelector = item => item.id }) => (
  <AntdTable
    rowKey={item => item.id}
    columns={columns}
    dataSource={data}
    pagination={{ defaultPageSize: 10, hideOnSinglePage: true }}
  />
)

export default Table