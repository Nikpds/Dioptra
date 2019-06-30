import React, { useState, useEffect } from 'react'
import { strings } from '../../contexts/LocalizationProvider'
import { Form, Input, Select } from 'antd'
import CardHolder from '../shared/CardHolder'
import ActionHeader from '../shared/ActionHeader'
import NationalityContainer from '../containers/nationality/NationalityContainer'
import { friendOrFoe } from '../../services/Enumerations'
import { enumToLookup } from '../../services/Utilities'

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

  const fof = value => {
    return { id: value, representation: friendOrFoe[value] }
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
            isDelete: true,
            type: 'danger',
            show: !nationality.id
          },
          {
            onClick: () => onSave(nationalityDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.nationality.shortname}>
            <Input
              name="shortName"
              value={nationalityDetails.shortName}
              maxLength={2}
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
            <Select
              style={{ width: '100%' }}
              value={nationalityDetails.foF.id}
              onChange={value => nationalityHandler('foF', fof(value))}>
              {enumToLookup(friendOrFoe).map(o => (
                <Select.Option key={o.id} value={o.id}>{o.description}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const NationalityForm = () => (
  <NationalityContainer>
    <NationalityDetails />
  </NationalityContainer>
)
export default NationalityForm
