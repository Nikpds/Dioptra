import React, { useState, useEffect } from 'react'
import UnitContainer from '../../containers/units/units/UnitContainer'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Col, Row,Divider } from 'antd'
import CardHolder from '../../shared/CardHolder'
import ActionHeader from '../../shared/ActionHeader'

const UnitDetails = ({ onBack, onSave, onDelete, unit, onCancel }) => {
  const [unitDetails, setUnitDetails] = useState(unit)

  const unitHandler = (name, value) => {
    setUnitDetails({
      ...unitDetails,
      [name]: value
    })
  }

  useEffect(() => {
    setUnitDetails(unit)
  }, [unit])
  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.unit.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            isDelete: true,
            type: 'danger',
            show: !unit.id
          },
          {
            onClick: () => onSave(unitDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="large">
        <Row>
          <Col span={12}>
            <Form
              labelCol={{ xs: { span: 4 } }}
              wrapperCol={{ xs: { span: 16 } }}>
              <Form.Item label={strings.unit.name}>
                <Input
                  name="name"
                  value={unitDetails.name}
                  maxLength={2}
                  onChange={e => unitHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
            <Divider type="vertical"/>
          </Col>
          <Col span={12}>
            <Form
              labelCol={{ xs: { span: 8 } }}
              wrapperCol={{ xs: { span: 16 } }}>
              <Form.Item label={strings.unit.name}>
                <Input
                  name="name"
                  value={unitDetails.name}
                  maxLength={2}
                  onChange={e => unitHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </CardHolder>
    </div>
  )
}

const UnitDetailsForm = () => (
  <UnitContainer>
    <UnitDetails />
  </UnitContainer>
)

export default UnitDetailsForm
