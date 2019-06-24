import React from 'react'
import UnitTypesContainer from '../../containers/units/unitType/UnitTypesContainer'
import { Button, Divider } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'

const UnitTypeList = ({ unitTypes, onCreate, onEdit, onDelete }) => {
    const headers = [
        {
          title: strings.unitType.name,
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
