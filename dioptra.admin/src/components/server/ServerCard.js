import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Icon, Card, Descriptions, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { api } from 'mis-react'
import { StatusTag } from '../../services/Utilities'

const ServerCard = withRouter (({ data, history }) => {
  const [server, setServer] = useState(data)
  const [status, setStatus] = useState({})
  const [loading, setLoading] = useState(false)
  const goToMonitor = () => {
    history.push('/server/monitor/' + server.id)
  }
  const fetchServerStatus = async () => {
    if (server.id) {
      setLoading(true)
      const response = await api.get(`/api/dashboard/${server.id}`)
      console.log(response)
      setLoading(false)
      setStatus(response)
    }
  }
  useEffect(() => {
    fetchServerStatus()
  }, [data])

  return (
    <div>
      <Card
        className="has-shadow"
        size="small"
        title={
          <div>
            <div>
              <NavLink to={'server/' + server.id}> {server.title}</NavLink>
            </div>
            <small>{server.ip}</small>
          </div>
        }
        actions={[
          <Button
            onClick={goToMonitor}
            size="small"
            type="primary"
            shape="circle"
            icon="monitor"
          />,
          <Button
            onClick={fetchServerStatus}
            size="small"
            type="red"
            shape="circle"
            icon={loading ? 'loading' : 'redo'}
          />
        ]}
        style={{ width: 150 }}>
        <Icon type="api" className="servericon" />
        <Descriptions>
          <Descriptions.Item label="Server">
            <StatusTag status={status.server} hasLabel small />
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Map">
            <StatusTag status={status.map} hasLabel small />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
})

export default ServerCard
