import React, { useState, useEffect } from 'react'
import { strings } from '../../../contexts//LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../../shared/ActionHeader'
import JrflTypeContainer from '../../containers/jrfl/jrflType/JrflTypeContainer'

const JrflTypeDetails = ({ onBack, onSave, onDelete, jrflType, onCancel }) => {
  const [jrflTypeDetails, setJrflTypeDetails] = useState(jrflType)

  const jrflTypeHandler = (name, value) => {
    setJrflTypeDetails({
      ...jrflTypeDetails,
      [name]: value
    })
  }

  useEffect(() => {
    setJrflTypeDetails(jrflType)
  }, [jrflType])

  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title="JRFL Type"
        actions={[
          { onClick: onCancel, name: strings.jrfltype.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.jrfltype.delete,
            type: 'danger',
            // show: !jrflType.id
            show: !'new'
          },
          {
            onClick: () => onSave(JrflTypeDetails),
            name: strings.jrfltype.save
          }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.jrfltype.name}>
            <Input
              name="jrflTypeName"
              value={jrflTypeDetails.jrflTypeName}
              onChange={e => jrflTypeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

const JrflTypeForm = () => (
    <JrflTypeContainer>
        <JrflTypeDetails/>
    </JrflTypeContainer>
)

export default JrflTypeForm
