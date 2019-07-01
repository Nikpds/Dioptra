import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import CardHolder from '../../shared/CardHolder'
import ActionHeader from '../../shared/ActionHeader'
import EmmiterFunctionContainer from '../../containers/transmitter/emmiterFunction/EmmiterFunctionContainer'

const EmmiterFunctionDetails = ({
  onBack,
  onSave,
  onDelete,
  emmiterFunction,
  onCancel
}) => {
  const [emmiterFunctionDetails, setEmmiterFunctionDetails] = useState(
    emmiterFunction
  )

  const emmiterFunctionHandler = (name, value) => {
    setEmmiterFunctionDetails({
      ...emmiterFunctionDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setEmmiterFunctionDetails(emmiterFunction)
  }, [emmiterFunction])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.emmiterFunction.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            isDelete: true,
            type: 'danger',
            show: !emmiterFunction.id
          },
          {
            onClick: () => onSave(emmiterFunctionDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.emmiterFunction.name}>
            <Input
              name="name"
              value={emmiterFunctionDetails.name}
              onChange={e =>
                emmiterFunctionHandler(e.target.name, e.target.value)
              }
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const EmmiterFunctionForm = () => ( 
  <EmmiterFunctionContainer>
    <EmmiterFunctionDetails />
  </EmmiterFunctionContainer>
)
export default EmmiterFunctionForm
