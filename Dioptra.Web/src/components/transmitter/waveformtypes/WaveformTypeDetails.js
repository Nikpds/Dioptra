import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input } from 'antd'
import CardHolder from '../../shared/CardHolder'
import ActionHeader from '../../shared/ActionHeader'
import WaveformTypeContainer from '../../containers/transmitter/waveformType/WaveformTypeContainer'

const WaveformTypeDetails = ({
  onBack,
  onSave,
  onDelete,
  waveformType,
  onCancel
}) => {
  const [waveformtypeDetails, setWaveformtypeDetails] = useState(waveformType)

  const waveformtypeHandler = (name, value) => {
    setWaveformtypeDetails({
      ...waveformtypeDetails,
      [name]: value
    })
  }
  useEffect(() => {
    setWaveformtypeDetails(waveformType)
  }, [waveformType])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title={strings.waveformtype.headerTitle}
        actions={[
          { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.buttons.delete,
            type: 'danger',
            isDelete: true,
            show: !waveformType.id
          },
          {
            onClick: () => onSave(waveformtypeDetails),
            name: strings.buttons.save
          }
        ]}
      />
      <CardHolder size="small">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 16 } }}>
          <Form.Item label={strings.waveformtype.typename}>
            <Input
              name="name"
              value={waveformtypeDetails.name}
              onChange={e => waveformtypeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </CardHolder>
    </div>
  )
}

const WaveformTypeForm = () => (
  <WaveformTypeContainer>
    <WaveformTypeDetails />
  </WaveformTypeContainer>
)
export default WaveformTypeForm
