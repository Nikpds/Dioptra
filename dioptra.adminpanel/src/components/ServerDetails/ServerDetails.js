import React, { useState } from 'react'
import { Form, Icon, Input, Button, Switch, Select, Col, Row } from 'antd'
import { klados } from '../../services/Enums'
import ServerContainer from '../containers/ServerContainer'
const section = klados

const ServerForm = ({ cancel, deleteHandler, insert, update, server }) => {
  const [_server, setServer] = useState(server)

  const inputChangeHandler = (name, value) => {
    setServer({
      ..._server,
      [name]: value
    })
  }

  const saveServer = () => {
    _server.id ? update(_server) : insert(_server)
  }

  return (
    <div>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
        <Form.Item label="Όνομα">
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="title"
            value={_server.title}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Ip">
          <Input
            prefix={
              <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            name="ip"
            value={_server.ip}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
          <Input
            prefix={
              <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            value={_server.apiPort}
            name="apiPort"
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Map Ip ">
          <Input
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={_server.mapIP}
            name="mapIP"
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Username">
          <Input
            prefix={
              <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            name="usernameDB"
            value={_server.usernameDB}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            prefix={
              <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            name="dbPassword"
            value={_server.dbPassword}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Server Password">
          <Input
            prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="password"
            value={_server.password}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Επικοινωνία">
          <Row>
            <Col span={12} >
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="contactInfo"
                value={_server.contactInfo}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
            <Col span={12}>
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="phone"
                value={_server.phone}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Σημειώσεις">
          <Input.TextArea
            rows={4}
            name="comments"
            value={_server.comments}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Κατάσταση">
          <Switch
            checked={_server.isActive}
            onChange={value => inputChangeHandler('isActive', value)}
            checkedChildren="Server ON"
            unCheckedChildren="Server OFF"
          />
        </Form.Item>
        <Form.Item label="Κλάδος">
          <Select
            style={{ width: 120 }}
            value={_server.section}
            onChange={value => inputChangeHandler('section', value)}>
            {section.map(k => (
              <Select.Option key={k.id} value={k.id}>
                {k.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={cancel}>
            Άκυρο
          </Button>
          <Button type="danger" onClick={deleteHandler}>
            Διαγραφή
          </Button>
          <Button type="primary" onClick={saveServer}>
            Αποθήκευση
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const ServerDetails = () => (
  <ServerContainer>
    <ServerForm />
  </ServerContainer>
)

export default ServerDetails
