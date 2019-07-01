import React from 'react'
import UnitsContainer from '../../containers/units/units/UnitsContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import SSPTable from '../../shared/SSPTable'

const Units = ({ units, onCreate, onEdit, onDelete, onPaginationChange }) => {
  const headers = [
    {
      title: strings.units.name,
      dataIndex: 'name',
      key: 'name',
      width: 200
    },
    {
      title: strings.units.natoName,
      dataIndex: 'natoName',
      key: 'natoName'
    },
    {
      title: strings.buttons.tableActions,
      width: 110,
      dataIndex: 'actions',
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
        title={strings.units.headerTitle}
        subtitle={units.rows.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <SSPTable
        data={units}
        columns={headers}
        onPaginationChange={onPaginationChange}
      />
    </div>
  )
}

const UnitsTable = () => (
    <UnitsContainer>
      <Units />
    </UnitsContainer>
  )
export default UnitsTable
