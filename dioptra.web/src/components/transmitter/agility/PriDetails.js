import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import PriDetailsContainer from '../../containers/transmitter/agility/PriDetailsContainer'
import CardHolder from '../../shared/CardHolder'
const PriDetails = ({ onBack, onSave, onDelete, priAgility, onCancel }) => {
  const [priAgilityDetails, setPriAgilityDetails] = useState(priAgility)
 
  const priAgilityHandler = (name, value) => {
    setPriAgilityDetails({
      ...priAgilityDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setPriAgilityDetails(priAgility)
  }, [priAgility])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.priAgility.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            isDelete: true,
            show: !priAgility.id
          },
          {
            onClick: () => onSave(priAgilityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.priAgility.name}>
            <Input
              name="name"
              value={priAgilityDetails.name}
              onChange={e => priAgilityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const PriDetailsForm = () => (
  <PriDetailsContainer>
    <PriDetails />
  </PriDetailsContainer>
)
export default PriDetailsForm
