import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import CardHolder from '../../shared/CardHolder'
import ActionHeader from '../../shared/ActionHeader'
import ScanFunctionContainer from '../../containers/transmitter/scanFunction/ScanFunctionContainer'

const ScanFunctionDetails = ({
  onBack,
  onSave,
  onDelete,
  scanFunction,
  onCancel
}) => {
  const [scanFunctionDetails, setScanFunctionDetails] = useState(scanFunction)

  const scanFunctionHandler = (name, value) => {
    setScanFunctionDetails({
      ...scanFunctionDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setScanFunctionDetails(scanFunction)
  }, [scanFunction])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.scanFunction.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            isDelete: true,
            show: !scanFunction.id
          },
          {
            onClick: () => onSave(scanFunctionDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.scanFunction.name}>
            <Input
              name="name"
              value={scanFunctionDetails.name}
              onChange={e => scanFunctionHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const ScanFunctionForm = () => (
  <ScanFunctionContainer>
    <ScanFunctionDetails />
  </ScanFunctionContainer>
)
export default ScanFunctionForm
