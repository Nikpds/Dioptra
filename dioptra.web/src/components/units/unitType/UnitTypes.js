import React from 'react'
import UnitTypesContainer from '../../containers/units/unitType/UnitTypesContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'
import { unitLevels } from '../../../services/Enumerations'

const UnitTypeList = ({ unitTypes, onCreate, onEdit, onDelete }) => {
  const headers = [
    {
      title: strings.unitType.name,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: strings.unitType.level,
      dataIndex: 'level',
      key: 'level',
      render: e => strings.enumerations[unitLevels[e]]
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
        title={strings.unitTypes.headerTitle}
        subtitle={unitTypes.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={unitTypes} columns={headers} />
    </div>
  )
}

const UnitTypeTable = () => (
  <UnitTypesContainer>
    <UnitTypeList />
  </UnitTypesContainer>
)
export default UnitTypeTable
