import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import PwAgilityContainer from '../../containers/transmitter/pwagility/PwAgilityContainer'

const PwAgilityDetails = ({
    onBack,
    onSave,
    onDelete,
    pwAgility,
    onCancel
  }) => { 
    const [pwAgilityDetails, setPwAgilityDetails] = useState(pwAgility)

    const pwAgilityHandler = (name, value) => {
        setPwAgilityDetails({
      ...pwAgilityDetails,
      [name]: value
      })
    }
    useEffect(() => {
        setPwAgilityDetails(pwAgility)
    }, [pwAgility])

      return (
        <div>
          <ActionHeader
            onBack={onBack}
            title={strings.pwAgility.headerTitle}
            actions={[
              { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
              {
                onClick: onDelete,
                name: strings.buttons.delete,
                type: 'danger',
                show: !pwAgility.id
              },
              {
                onClick: () => onSave(pwAgilityDetails),
                name: strings.buttons.save
              }
            ]}
          />
          <Card style={{ margin: 20 }} className="has-shadow">
            <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
              <Form.Item label={strings.pwAgility.name}>
                <Input
                  name="name"
                  value={pwAgilityDetails.name}
                  onChange={e => pwAgilityHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
  }

const PwAgilityForm = () => (
    <PwAgilityContainer>
      <PwAgilityDetails />
    </PwAgilityContainer>
  )
  export default PwAgilityForm