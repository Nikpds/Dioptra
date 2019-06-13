import React, { useState } from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Switch,
  Radio,
  Mentions,
  Col,
  Row
} from 'antd'
import UserContainer from '../containers/UsersContainer'

const userForm = ({ cancel, deleteHandler, insert, update, user }) => {
  
  const [_user, setUser] = useState(user)

  const inputChangeHandler = (name, value) => {
    setUser({
      ..._user,
      [name]: value
    })
  }
  const saveUser = () => {
    _user.id ? update(_user) : insert(_user)
  }
  return (
    <div>
    <Form>
      <h1>Titlos</h1>
      <Form.Item>
        <Col span={16}>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            placeholder="Όνομα Χρήστη"
            name="userName"
            value={_user.userName}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Col>
      </Form.Item>
      <Form.Item>
        <Col span={16}>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            placeholder="Επώνυμο Χρήστη"
            name="userSName"
            value={_user.userSName}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Col>
      </Form.Item>
      <Form.Item>
        Κατάσταση Χρήστη :
        <Switch
          checked={_user.userStatus}
          onChange={value => inputChangeHandler('status', value)}
          checkedChildren="Ενεργός"
          unCheckedChildren="Ανενεργός"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={cancel}>
          Άκυρο
        </Button>
        <Button type="danger" onClick={deleteHandler}>
          Διαγραφή
        </Button>
        <Button type="primary" onClick={saveUser}>
          Αποθήκευση
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

const UserDetails = () => (
  <UserContainer>
    <userForm />
  </UserContainer>
)

export default UserDetails
