import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import UnitMissionContainer from '../../containers/units/unitMission/UnitMissionContainer'

const UnitMissionDetails = ({
  onBack,
  onSave,
  onDelete,
  onCancel,
  unitMission
}) => {
  const [unitMissionDetails, setunitMissionDetails] = useState(unitMission)

  const unitMissionHandler = (name, value) => {
    setunitMissionDetails({
      ...unitMissionDetails,
      [name]: value
    })
  }

  useEffect(() => {
    setunitMissionDetails(unitMission)
  }, [unitMission])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={
          unitMissionDetails.id
            ? strings.unitType.headerTitleEdit
            : strings.unitType.headerTitleNew
        }
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            show: !unitMissionDetails.id
          },
          {
            onClick: () => onSave(unitMissionDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.unitMission.name}>
            <Input
              name="name"
              value={unitMissionDetails.name}
              onChange={e => unitMissionHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
const UnitMissionForm = () => (
  <UnitMissionContainer>
    <UnitMissionDetails />
  </UnitMissionContainer>
)
export default UnitMissionForm
