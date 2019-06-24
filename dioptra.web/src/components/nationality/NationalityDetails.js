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
  const nationalityHandler = (name, value) => {
    setNationalityDetails({
      ...nationalityDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setNationalityDetails(nationality)
  }, [nationality])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.Nationality.headerTitle}
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
          <Form.Item label={strings.Nationality.shortname}>
            <Input
              name="codeName"
              value={nationalityDetails.codeName}
              onChange={e => nationalityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.Nationality.name}>
            <Input
              name="name"
              value={nationalityDetails.codeName}
              onChange={e => nationalityHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={strings.Nationality.name}>
            <Col span={12}>
              <span>{strings.Nationalities.status}</span>
              <Select
                style={{ width: 120 }}
                value={nationalityDetails.status}
                onChange={value => nationalityHandler('status',value)}>
                  <Select.Option key='1'>Test1</Select.Option>
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
        <NationalityDetails/>
    </NationalityContainer>
)
export default NationalityForm
