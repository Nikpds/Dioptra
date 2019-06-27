import React from 'react'
import ScanFunctionsContainer from '../../containers/transmitter/scanfunction/ScanFunctionsContainer'
import { Button, Divider, Popconfirm } from 'antd'
import { strings } from '../../../contexts/LocalizationProvider'
import ActionHeader from '../../shared/ActionHeader'
import SSPTable from '../../shared/SSPTable'
import Table from '../../shared/Table'

const ScanFunctionsList = ({
  scanFunctions,
  onCreate,
  onEdit,
  onDelete,
}) => {
  const headers = [
    {
      title: strings.scanFunction.name,
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
        title={strings.scanFunctions.headerTitle}
        subtitle= {scanFunctions.length}
        actions={[
          {
            onClick: onCreate,
            name: strings.buttons.create,
            type: 'primary'
          }
        ]}
      />
      <Table data={scanFunctions} columns={headers} />
    </div>
  )
}

const ScanFunctionsForm = () => (
  <ScanFunctionsContainer>
    <ScanFunctionsList />
  </ScanFunctionsContainer>
)
export default ScanFunctionsForm