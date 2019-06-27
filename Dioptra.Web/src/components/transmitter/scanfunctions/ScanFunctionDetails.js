import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import ScanFunctionContainer from '../../containers/transmitter/scanfunction/ScanFunctionContainer'

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
                show: !scanFunction.id
              },
              {
                onClick: () => onSave(scanFunctionDetails),
                name: strings.buttons.save
              }
            ]}
          />
          <Card style={{ margin: 20 }} className="has-shadow">
            <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
              <Form.Item label={strings.scanFunction.name}>
                <Input
                  name="name"
                  value={scanFunctionDetails.name}
                  onChange={e => scanFunctionHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
  }

const ScanFunctionForm = () => (
    <ScanFunctionContainer>
      <ScanFunctionDetails />
    </ScanFunctionContainer>
  )
  export default ScanFunctionForm