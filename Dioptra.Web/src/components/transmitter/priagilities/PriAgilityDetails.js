import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import PriAgilityContainer from '../../containers/transmitter/priagility/PriAgilityContainer'

const PriAgilityDetails = ({
    onBack,
    onSave,
    onDelete,
    priAgility,
    onCancel
  }) => { 
    const [priAgilityDetails, setPriAgilityDetails] = useState(priAgility)

    const priAgilityHandler = (name, value) => {
        setPriAgilityDetails({
      ...priAgilityDetails,
      [name]: value
      })
    }
    useEffect(() => {
        setPriAgilityDetails(priAgility)
    }, [priAgility])

      return (
        <div>
          <ActionHeader
            onBack={onBack}
            title={strings.priAgility.headerTitle}
            actions={[
              { onClick: onCancel, name: strings.buttons.cancel, type: 'default' },
              {
                onClick: onDelete,
                name: strings.buttons.delete,
                type: 'danger',
                show: !priAgility.id
              },
              {
                onClick: () => onSave(priAgilityDetails),
                name: strings.buttons.save
              }
            ]}
          />
          <Card style={{ margin: 20 }} className="has-shadow">
            <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
              <Form.Item label={strings.priAgility.name}>
                <Input
                  name="name"
                  value={priAgilityDetails.name}
                  onChange={e => priAgilityHandler(e.target.name, e.target.value)}
                />
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
  }

const PriAgilityForm = () => (
    <PriAgilityContainer>
      <PriAgilityDetails />
    </PriAgilityContainer>
  )
  export default PriAgilityForm