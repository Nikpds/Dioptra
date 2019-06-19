import React, { useState } from 'react'
import ServerMonitorContainer from '../containers/ServerMonitorContainer'
import { PageHeader, Tag, Tabs, Button, Row, Col, Card } from 'antd'
import ServerStats from './ServerStats'
import ServerDatabase from './ServerDatabase'
import ServerLogs from './ServerLogs'
import ServerViewDetails from './ServerViewDetails'

const { TabPane } = Tabs
const ServerMonitor = ({ server, onBack, onCancel, fetchServer }) => {
  const [selectedTab, setSelectedTab] = useState('1')
  const Content = () => {
    if (selectedTab === '1') return <ServerViewDetails server={server} />
    if (selectedTab === '2') return <ServerLogs server={server} />
    return <ServerDatabase server={server} />
  }
  return (
    <div>
      <PageHeader
        onBack={onBack}
        title={server.title}
        subTitle={server.id}
        //tags={<Tag color="red"></Tag>}
        extra={[
          <Button key="3" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="2" type="primary" onClick={fetchServer}>
            Refresh
          </Button>
        ]}
        footer={
          <Tabs
            defaultActiveKey={selectedTab}
            onChange={v => setSelectedTab(v)}>
            <TabPane tab="Details" key="1" />
            <TabPane tab="Logs" key="2" />
            <TabPane tab="Database" key="3" />
          </Tabs>
        }>
        <Row type="flex" justify="start">
          <Col span={24}>
            <ServerStats server={server} />
          </Col>
        </Row>
      </PageHeader>
     
        <Content />
     
    </div>
  )
}
const SM = () => (
  <ServerMonitorContainer>
    <ServerMonitor />
  </ServerMonitorContainer>
)
export default SM
