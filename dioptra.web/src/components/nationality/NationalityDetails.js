import React, { useState, useEffect } from 'react'
import { strings } from '../../contexts/LocalizationProvider'
import { Form, Input, Card, Select, Col } from 'antd'
import ActionHeader from '../shared/ActionHeader'
import NationalityContainer from '../containers/nationality/NationalityContainer'

const NationalityDetails = ({
  onBack,
  onSave,
  onDelete,
  nationality,
  onCancel
}) => {
  const [nationalityDetails, setNationalityDetails] = useState(nationality)
  let shortnameMaxInput = 2
  const nationalityHandler = (name, value) => {
    setNationalityDetails({
      ...nationalityDetails,
      [name]: value
    })
  }

  const fof = value => {
    return { id: value, representation: 'TEST' }
  }
  useEffect(() => {
    setNationalityDetails(nationality)
  }, [nationality])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.nationality.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            show: !nationality.id
          },
          {
            onClick: () => onSave(nationalityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.nationality.shortname}>
            <Input
              name="shortName"
              value={nationalityDetails.shortName}
              maxLength = {shortnameMaxInput}
              onChange={e => nationalityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.nationality.name}>
            <Input
              name="name"
              value={nationalityDetails.name}
              onChange={e => nationalityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.nationalities.fof}>
            <Col span={12}>
              <Select
                style={{ width: 120 }}
                value={nationalityDetails.foF.id}
                onChange={value => nationalityHandler('foF', fof(value))}>
                <Select.Option value={0}>Test1</Select.Option>
                <Select.Option value={1}>Test213123</Select.Option>
              </Select>
            </Col>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

const NationalityForm = () => (
  <NationalityContainer>
    <NationalityDetails />
  </NationalityContainer>
)
export default NationalityForm
