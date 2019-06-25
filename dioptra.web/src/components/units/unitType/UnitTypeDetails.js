import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card, Select } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import UnitTypeContainer from '../../containers/units/unitType/UnitTypeContainer'

const { Option } = Select

const UnitTypeDetails = ({ onBack, onSave, onDelete, onCancel, unitType }) => {
  const [unitTypeDetails, setunitTypeDetails] = useState(unitType)

  const unitTypeHandler = (name, value) => {
    setunitTypeDetails({
      ...unitTypeDetails,
      [name]: value
    })
  }
  const createLevel = value => {
    return { id: value, representation: 'asdas' }
  }
  useEffect(() => {
    setunitTypeDetails(unitType)
  }, [unitType])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={
          unitTypeDetails.id
            ? strings.unitType.headerTitleNew
            : strings.unitType.headerTitleEdit
        }
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            show: !unitTypeDetails.id
          },
          {
            onClick: () => onSave(unitTypeDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.unitType.name}>
            <Input
              name="name"
              value={unitTypeDetails.name}
              onChange={e => unitTypeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.unitType.level}>
            <Select
              name="level"
              value={unitTypeDetails.level.id}
              onChange={value => unitTypeHandler('level', createLevel(value))}>
              <Option value="0">Jack</Option>
            </Select>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
const UnitTypeForm = () => (
  <UnitTypeContainer>
    <UnitTypeDetails />
  </UnitTypeContainer>
)
export default UnitTypeForm
