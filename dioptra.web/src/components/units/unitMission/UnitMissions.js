import React from 'react'
import UnitMissionsContainer from '../../containers/units/unitMission/UnitMissionsContainer'
import { Button, Divider } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'

const UnitMissionList = ({ unitmissions, onCreate, onEdit, onDelete }) => {
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
            <Button
              key={1}
              type="danger"
              shape="circle"
              icon="delete"
              size="small"
              onClick={() => onDelete(row.id)}
            />,
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
        subtitle={unitmissions.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={unitmissions} columns={headers} />
    </div>
  )
}

const UnitMissiontTable = () => (
  <UnitMissionsContainer>
    <UnitMissionList />
  </UnitMissionsContainer>
)
export default UnitMissiontTable
