import React from 'react'
import { Descriptions, Card } from 'antd'
const ServerViewDetails = ({ server }) => {
  return (
    <Card
      className="has-shadow"
      style={{ margin: 20 }}
      bodyStyle={{ padding: 0 }}>
      <Descriptions bordered border size="middle" column={2}>
        <Descriptions.Item label="Title">{server.title}</Descriptions.Item>
        <Descriptions.Item label="Ip">{server.ip}</Descriptions.Item>
        <Descriptions.Item label="Map Ip">{server.mapIp}</Descriptions.Item>
        <Descriptions.Item label="Username">
          {server.username}
        </Descriptions.Item>
        <Descriptions.Item label="Password">
          {server.password}
        </Descriptions.Item>
        <Descriptions.Item label="DB username">
          {server.dbUsername}
        </Descriptions.Item>
        <Descriptions.Item label="DB password">
          {server.dbPassword}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">{server.phone}</Descriptions.Item>
        <Descriptions.Item label="ContactInfo">
          {server.contactInfo}
        </Descriptions.Item>
        <Descriptions.Item label="Comments">
          {server.comments}
        </Descriptions.Item>
        <Descriptions.Item label="Protocol">
          {server.protocol}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default ServerViewDetails
