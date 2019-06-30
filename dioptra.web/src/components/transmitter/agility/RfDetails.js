import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import RfDetailsContainer from '../../containers/transmitter/agility/RfDetailsContainer'
import CardHolder from '../../shared/CardHolder'
const RfDetails = ({ onBack, onSave, onDelete, onCancel, rfAgility }) => {
  const [rfAgilityDetails, setrfAgilityDetails] = useState(rfAgility)

  const rfAgilityDetailsHandler = (name, value) => {
    setrfAgilityDetails({
      ...rfAgilityDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setrfAgilityDetails(rfAgility)
  }, [rfAgility])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={
          rfAgilityDetails.id
            ? strings.rfAgility.headerTitleEdit
            : strings.rfAgility.headerTitleNew
        }
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            isDelete: true,
            show: !rfAgilityDetails.id
          },
          {
            onClick: () => onSave(rfAgilityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.rfAgility.name}>
            <Input
              name="name"
              value={rfAgilityDetails.name}
              onChange={e =>
                rfAgilityDetailsHandler(e.target.name, e.target.value)
              }
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}
const RfDetailsForm = () => (
  <RfDetailsContainer>
    <RfDetails />
  </RfDetailsContainer>
)
export default RfDetailsForm
