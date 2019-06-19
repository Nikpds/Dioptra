import React from 'react'
import { Table as AntdTable, Card } from 'antd'
import './shared.less'

const Table = ({ columns, data, keySelector = item => item.id }) => (
  <Card
    style={{ margin: 20 }}
    className="has-shadow"
    bodyStyle={{ padding: 0 }}>
    <AntdTable
      rowKey={item => item.id}
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 10, hideOnSinglePage: true }}
    />
  </Card>
)

export default Table
