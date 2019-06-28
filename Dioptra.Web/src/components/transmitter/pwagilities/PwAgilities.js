import React from 'react'
import PwAgilitiesContainer from '../../containers/transmitter/pwagility/PwAgilitiesContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import Table from '../../shared/Table'

const PwAgilitiesList = ({
  pwAgilities,
  onCreate,
  onEdit,
  onDelete,
}) => {
  const headers = [
    {
      title: strings.pwAgility.name,
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
        title={strings.pwAgilities.headerTitle}
        subtitle= {pwAgilities.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={pwAgilities} columns={headers} />
    </div>
  )
}

const PwAgilitiesForm = () => (
  <PwAgilitiesContainer>
    <PwAgilitiesList />
  </PwAgilitiesContainer>
)
export default PwAgilitiesForm