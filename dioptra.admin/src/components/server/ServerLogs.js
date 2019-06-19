import React, { useEffect, useState } from 'react'
import Table from '../shared/Table'
import { Tag } from 'antd'
import { api } from 'mis-react'
import { logEntryType } from '../../services/Enums'
import { LogTypeTag } from '../../services/Utilities'
const columns = [
  {
    title: 'Time',
    dataIndex: 'entryTime',
    key: 'EntryTime'
  },
  {
    title: 'MethodName',
    dataIndex: 'methodName',
    key: 'MethodName'
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: e => <Tag color={LogTypeTag[e]}>{logEntryType[e]}</Tag>
  }
]
const ServerLogs = ({ server }) => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    async function fetchLogs() {
      if (!server.id) return
      var response = await api.get(`/api/server/logs/${server.id}`)
      if (response) setLogs(response)
    }
    fetchLogs()
  }, server)
  return <Table columns={columns} data={logs} />
}

export default ServerLogs
