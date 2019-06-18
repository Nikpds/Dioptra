import React, { useState, useEffect } from 'react'
import ServerCard from '../server/ServerCard'
import { api } from 'mis-react'
import { Row, Col } from 'antd'
const DashboardContainer = () => {
  const [servers, setServers] = useState([])
  
  const renderServers = servers.map(item => (
    <Col span={4} key={item.id}>
      {' '}
      <ServerCard data={item} />
    </Col>
  ))

  useEffect(() => {
    async function fetchServers() {
      const response = await api.get('/api/server')
      setServers(response)
    }
    fetchServers()
  }, [])
  return <Row type="flex" justify="center">{renderServers}</Row>
}

export default DashboardContainer
