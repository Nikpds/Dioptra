import React from 'react'
import JrflTypesContainer from '../../containers/jrfl/jrflType/JrflTypesContainer'
import Table from '../../shared/Table'
import ActionHeader from '../../shared/ActionHeader'
import { Button, Divider,Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'

const JrflTypes = ({ jrflTypes, onCreate, onEdit, onDelete }) => {
  const headers = [
    {
      title: strings.jrfltypes.name,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: strings.buttons.tableActions,
      dataIndex: 'actions',
      key: 'actions',
      width: 110,
      render: (e, row) => [
        <Popconfirm key={1}
          title="Are you sure ?"
          onConfirm={() => onDelete(row.id)}
          onCancel={null}
          okText="Yes"
          cancelText="No">
          <Button           
            type="danger"
            shape="circle"
            icon="delete"
            size="small"            
          />
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
        title={strings.jrfltypes.headerTitle}
        subtitle={jrflTypes.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={jrflTypes} columns={headers} />
    </div>
  )
}

const JfrlTypeTable = () => (
  <JrflTypesContainer>
    <JrflTypes />
  </JrflTypesContainer>
)
export default JfrlTypeTable
