import React from 'react'
import UnitMissionsContainer from '../../containers/units/unitMission/UnitMissionsContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'

const UnitMissionList = ({ unitMissions, onCreate, onEdit, onDelete }) => {
  console.log(unitMissions)
  const headers = [
    {
      title: strings.unitMission.name,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: strings.buttons.tableActions,
      dataIndex: 'actions',
      key: 'actions',
      render: (e, row) => [
        <Popconfirm
          key={1}
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
        title={strings.unitMissions.headerTitle}
        subtitle={unitMissions.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={unitMissions} columns={headers} />
    </div>
  )
}

const UnitMissiontTable = () => (
  <UnitMissionsContainer>
    <UnitMissionList />
  </UnitMissionsContainer>
)
export default UnitMissiontTable
