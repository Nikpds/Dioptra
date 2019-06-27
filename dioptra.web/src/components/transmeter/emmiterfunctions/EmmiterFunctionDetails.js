import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import EmmiterFunctionContainer from '../../containers/transmeter/emmiterfunction/EmmiterFunctionContainer'

const EmmiterFunctionDetails = ({
    onBack,
    onSave,
    onDelete,
    emmiterFunction,
    onCancel
  }) => { 
    const [emmiterFunctionDetails, setEmmiterFunctionDetails] = useState(emmiterFunction)

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
                type: 'danger',
                show: !emmiterFunction.id
              },
              {
                onClick: () => onSave(emmiterFunctionDetails),
                name: strings.buttons.save
              }
            ]}
          />
          <Card style={{ margin: 20 }} className="has-shadow">
            <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
              <Form.Item label={strings.emmiterFunction.name}>
                <Input
                  name="name"
                  value={emmiterFunctionDetails.name}
                  onChange={e => emmiterFunctionHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
  }

const EmmiterFunctionForm = () => (
    <EmmiterFunctionContainer>
      <EmmiterFunctionDetails />
    </EmmiterFunctionContainer>
  )
  export default EmmiterFunctionForm