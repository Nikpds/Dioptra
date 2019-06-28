import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Select } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import UnitTypeContainer from '../../containers/units/unitType/UnitTypeContainer'
import { enumToLookup } from '../../../services/Utilities'
import { unitLevels } from '../../../services/Enumerations'
import CardHolder from '../../shared/CardHolder'

const { Option } = Select

const UnitTypeDetails = ({ onBack, onSave, onDelete, onCancel, unitType }) => {
  const [unitTypeDetails, setunitTypeDetails] = useState(unitType)
  const unitTypeHandler = (name, value) => {
    setunitTypeDetails({
      ...unitTypeDetails,
      [name]: value
    })
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
            ? strings.unitType.headerTitleEdit
            : strings.unitType.headerTitleNew
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
      <CardHolder size="small">
        <Form
          layout="horizontal"
          labelCol={{ xs: { span: 8 } }}
          wrapperCol={{ xs: { span: 16 } }}>
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
              value={unitTypeDetails.level}
              onChange={value => unitTypeHandler('level', value)}>
              {enumToLookup(unitLevels).map(o => (
                <Option key={o.id} value={o.id}>
                  {o.description}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}
const UnitTypeForm = () => (
  <UnitTypeContainer>
    <UnitTypeDetails />
  </UnitTypeContainer>
)
export default UnitTypeForm
