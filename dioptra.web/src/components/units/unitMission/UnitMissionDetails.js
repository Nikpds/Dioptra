import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import UnitMissionContainer from '../../containers/units/unitMission/UnitMissionContainer'
import CardHolder from '../../shared/CardHolder'
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
            isDelete: true,
            type: 'danger',
            show: !unitMissionDetails.id
          },
          {
            onClick: () => onSave(unitMissionDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.unitMission.name}>
            <Input
              name="name"
              value={unitMissionDetails.name}
              onChange={e => unitMissionHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}
const UnitMissionForm = () => (
  <UnitMissionContainer>
    <UnitMissionDetails />
  </UnitMissionContainer>
)
export default UnitMissionForm
