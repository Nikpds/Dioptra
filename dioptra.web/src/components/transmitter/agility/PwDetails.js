import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import PwDetailsContainer from '../../containers/transmitter/agility/PwDetailsContainer'
import CardHolder from '../../shared/CardHolder'
const PwDetails = ({ onBack, onSave, onDelete, pwAgility, onCancel }) => {
  const [pwAgilityDetails, setPwAgilityDetails] = useState(pwAgility)

  const pwAgilityHandler = (name, value) => {
    setPwAgilityDetails({
      ...pwAgilityDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setPwAgilityDetails(pwAgility)
  }, [pwAgility])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.pwAgility.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            isDelete: true,
            show: !pwAgility.id
          },
          {
            onClick: () => onSave(pwAgilityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.pwAgility.name}>
            <Input
              name="name"
              value={pwAgilityDetails.name}
              onChange={e => pwAgilityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const PwDetailsForm = () => (
  <PwDetailsContainer>
    <PwDetails />
  </PwDetailsContainer>
)
export default PwDetailsForm
