import React from 'react'
import { Table as AntdTable, Card } from 'antd'
import './shared.less'
import Paginator from './Paginator'

const Table = ({ columns, data, onPaginationChange }) => {
  return (
    <Card
      style={{ margin: 20 }}
      className="has-shadow"
      bodyStyle={{ padding: 0 }}>
      <AntdTable
        rowKey={item => item.id}
        columns={columns}
        row={false}
        dataSource={data.rows}
        pagination={false}
      />
      <div style={{ padding: 10, float: 'right' }}>
        <Paginator
          total={data.totalRows}
          current={data.page}
          pageSize={data.pageSize}
          onPaginationChange={onPaginationChange}
        />
      </div>
    </Card>
  )
}
export default Table
