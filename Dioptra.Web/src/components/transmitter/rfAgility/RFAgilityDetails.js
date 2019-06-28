import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import RFAgilityContainer from '../../containers//transmitter/rfAgility/RFAgilityContainer'

const RFAgilityDetails = ({
  onBack,
  onSave,
  onDelete,
  onCancel,
  rfAgility
}) => {
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
            show: !rfAgilityDetails.id
          },
          {
            onClick: () => onSave(rfAgilityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
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
      </Card>
    </div>
  )
}
const RFAgilityForm = () => (
  <RFAgilityContainer>
    <RFAgilityDetails />
  </RFAgilityContainer>
)
export default RFAgilityForm
