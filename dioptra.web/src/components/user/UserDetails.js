import React from 'react'
import { strings } from '../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../shared/ActionHeader'
import UserContainer from '../containers/user/UserContainer'
const UserDetails = ({ onBack, onSave, onDelete, user, onCancel }) => {
  return (
    <div>
      <ActionHeader
        onBack={onBack}
        title="Νεος Χρήστης"
        actions={[
          { onClick: onCancel, name: strings.user.cancel, type: 'default' },
          {
            onClick: onDelete,
            name: strings.user.delete,
            type: 'danger',
            show: !user.id
          },
          { onClick: onSave, name: strings.user.save }
        ]}
      />
      <Card style={{ margin: 20 }} className="has-shadow">
        <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
          <Form.Item label={strings.user.name}>
            <Input value="" onChange={() => null} />
          </Form.Item>
          <Form.Item label={strings.user.username}>
            <Input value="" onChange={() => null} />
          </Form.Item>
          <Form.Item label={strings.user.password}>
            <Input value="" onChange={() => null} />
          </Form.Item>
          <Form.Item label={strings.user.phone}>
            <Input value="" onChange={() => null} />
          </Form.Item>
          <Form.Item label={strings.user.email}>
            <Input value="" onChange={() => null} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
const UserForm = () => (
  <UserContainer>
    <UserDetails />
  </UserContainer>
)

export default UserForm
