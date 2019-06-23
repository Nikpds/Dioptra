import React from 'react'
import { Table as AntdTable, Card, Row, Col } from 'antd'

const Table = ({ columns, data, keySelector = item => item.id, size }) => {
  const layout = size ? size : { xs: { span: 24 }, lg: { span: 16 } }
  return (
    <Row type="flex" justify="center">
      <Col {...layout}>
        <Card
          style={{ margin: 20 }}
          className="has-shadow"
          bodyStyle={{ padding: 0 }}
          bordered={false}>
          <AntdTable            
            rowKey={keySelector}
            columns={columns}
            dataSource={data}
            pagination={{ defaultPageSize: 10, hideOnSinglePage: true }}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Table
