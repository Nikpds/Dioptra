import React from 'react'
import { Row, Col, Card } from 'antd'

const CardHolder = props => {
  const sizes = {
    small: { xs: 24, lg: 24, xl: 18, xxl: 14 },
    medium: { xs: 24, lg: 24, xl: 20, xxl: 16 },
    large: { xs: 24 }
  }
  return (
    <Row style={{ margin: 20 }} type="flex" justify="center">
      <Col {...sizes[props.size]}>
        <Card className="has-shadow">{props.children}</Card>
      </Col>
    </Row>
  )
}

export default CardHolder
