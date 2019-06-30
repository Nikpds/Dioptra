import React from 'react'
import NationalitiesContainer from '../containers/nationality/NationalitiesContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
import ActionHeader from '../shared/ActionHeader'
import SSPTable from '../shared/SSPTable'

const NationalitiesList = ({
  nationalities,
  onCreate,
  onEdit,
  onDelete,
  onPaginationChange
}) => {
  const headers = [
    {
      title: strings.nationality.shortname,
      dataIndex: 'shortName',
      key: 'shortName',
      width: 150
    },
    {
      title: strings.nationality.name,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: strings.nationality.fof,
      dataIndex: 'foF.representation',
      key: 'fof',
      render: e => strings.enumerations[e]
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
        title={strings.nationalities.headerTitle}
        subtitle={nationalities.rows.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <SSPTable
        data={nationalities}
        columns={headers}
        onPaginationChange={onPaginationChange}
      />
    </div>
  )
}

const NationalitiesForm = () => (
  <NationalitiesContainer>
    <NationalitiesList />
  </NationalitiesContainer>
)
export default NationalitiesForm
