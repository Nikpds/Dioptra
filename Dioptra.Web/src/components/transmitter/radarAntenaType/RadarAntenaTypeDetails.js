import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import RadarAntenaTypeContainer from '../../containers/transmitter/radarAntennaType/RadarAntennaTypeContainer'

const RadarAntenaTypeDetails = ({
  onBack,
  onSave,
  onDelete,
  onCancel,
  radarAntenaType
}) => {
  const [radarAntenaTypeDetails, setRadarAntenaTypeDetails] = useState(radarAntenaType)

  const radarAntenaTypeHandler = (name, value) => {
    setRadarAntenaTypeDetails({
      ...radarAntenaTypeDetails,
      [name]: value
    })
  }

  useEffect(() => {
    setRadarAntenaTypeDetails(radarAntenaType)
  }, [radarAntenaType])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={radarAntenaTypeDetails.id
            ? strings.radarAntenaType.headerTitleEdit
            : strings.radarAntenaType.headerTitleNew
        }
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            show: !radarAntenaTypeDetails.id
          },
          {
            onClick: () => onSave(radarAntenaTypeDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.radarAntenaType.name}>
            <Input
              name="name"
              value={radarAntenaTypeDetails.name}
              onChange={e =>
                radarAntenaTypeHandler(e.target.name, e.target.value)
              }
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
const RadarAntenaTypeForm = () => (
  <RadarAntenaTypeContainer>
    <RadarAntenaTypeDetails />
  </RadarAntenaTypeContainer>
)
export default RadarAntenaTypeForm
