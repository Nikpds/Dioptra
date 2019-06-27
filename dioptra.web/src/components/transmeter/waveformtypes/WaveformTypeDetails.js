import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import WaveformTypeContainer from '../../containers/transmeter/waveformtype/WaveformTypeContainer'

const WaveformTypeDetails = ({
    onBack,
    onSave,
    onDelete,
    waveformType,
    onCancel
  }) => { 
    const [waveformtypeDetails, setWaveformtypeDatails] = useState(waveformType)

    const waveformtypeHandler = (name, value) => {
      setWaveformtypeDatails({
        ...waveformtypeDetails,
        [name]: value
      })
    }
    useEffect(() => {
      setWaveformtypeDatails(waveformType)
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
                show: !waveformType.id
              },
              {
                onClick: () => onSave(waveformtypeDetails),
                name: strings.buttons.save
              }
            ]}
          />
          <Card style={{ margin: 20 }} className="has-shadow">
            <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
              <Form.Item label={strings.waveformtype.typename}>
                <Input
                  name="name"
                  value={waveformtypeDetails.name}
                  onChange={e => waveformtypeHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
  }

const WaveformTypeForm = () => (
    <WaveformTypeContainer>
      <WaveformTypeDetails />
    </WaveformTypeContainer>
  )
  export default WaveformTypeForm