import React from 'react'
import WaveformTypesContainer from '../../containers/transmitter/waveformType/WaveformTypesContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'

const WaveformTypesList = ({ waveformTypes, onCreate, onEdit, onDelete }) => {
  const headers = [
    {
      title: strings.waveformtype.typename,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: strings.buttons.tableActions,
      dataIndex: 'actions',
      width: 110,
      key: 'actions',
      render: (e, row) => [
        <Popconfirm
          key={1}
          title={strings.popconfirm.title}
          onConfirm={() => onDelete(row.id)}
          onCancel={null}
          okText={strings.popconfirm.confirm}
          cancelText={strings.popconfirm.cancel}>
          <Button type="danger" shape="circle" icon="delete" size="small" />
        </Popconfirm>,
        <Divider key={2} type="vertical" />,
        <Button
          key={3}
          type="default"
          shape="circle"
          icon="form"
          size="small"
          onClick={() => onEdit(row.id)}
        />
      ]
    }
  ]
  return (
    <div>
      <ActionHeader
        title={strings.waveformtypes.headerTitle}
        subtitle={waveformTypes.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={waveformTypes} columns={headers} />
    </div>
  )
}

const WaveformTypeForm = () => (
  <WaveformTypesContainer>
    <WaveformTypesList />
  </WaveformTypesContainer>
)
export default WaveformTypeForm
