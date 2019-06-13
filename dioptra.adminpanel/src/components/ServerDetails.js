import React, { useState } from 'react'
import { Form, Icon, Input, Button, Switch, Select, Col, Row } from 'antd'
import { klados } from '../services/Enums'
import ServerContainer from './containers/ServerContainer'
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

  const style = {
    form: {
      width: '60%',
      height: '80%',
      border: '3px solid #555',
      boxSizing: 'borde-box',
      border: '2px solid #ccc',
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      padding: '4%',
      marginLeft: '10%',
      position: 'center'
    },
    formitem: {
      color: 'white',
      fontWeight: 'bold'
    }
  }
  return (
    <div>
      <Form style={style.form}>     
        <Form.Item style={style.formitem}>
          <Row gutter={10}>
            <Col span={5}>Όνομα:</Col>
            <Col span={16}>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                placeholder="Username"
                name="serverName"
                value={_server.serverName}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>IP:</Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="IP Api"
                  name="serverIp"
                  value={_server.serverIp}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Port API"
                  value={_server.serverPort}
                  name="serverPort"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>IP Χάρτη:</Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Ip Χάρτη"
                  value={_server.mapIP}
                  name="mapIP"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Map Port"
                  value={_server.mapPort}
                  name="mapPort"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}> Θύρα Βάσης:</Col>
              <Col span={16}>
                <Input
                  prefix={
                    <Icon
                      type="database"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  placeholder="Port DB"
                  value={_server.portDB}
                  name="portDB"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}> Username DB:</Col>
              <Col span={16}>
                <Input
                  prefix={
                    <Icon
                      type="database"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  placeholder="Username DB"
                  name="usernameDB"
                  value={_server.usernameDB}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>Password DB:</Col>
              <Col span={16}>
                <Input
                  prefix={
                    <Icon
                      type="database"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  placeholder="Password DB"
                  name="passwordDB"
                  value={_server.passwordDB}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <Input.Group size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>Linux Κωδικός:</Col>
              <Col span={16}>
                <Input
                  prefix={
                    <Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Linux Code"
                  name="linuxCode"
                  value={_server.linuxCode}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Input.Group size="large" style={style.formitem}>
          <Row gutter={8}>
            <Col span={5}>Επικοινωνία:</Col>
            <Col span={8}>
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Όνομα Επικοινωνίας"
                name="contactname"
                value={_server.contactname}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
            <Col span={8}>
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Τηλέφωνο"
                name="contactphone"
                value={_server.contactphone}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
          </Row>
        </Input.Group>
        <Form.Item style={style.formitem}>
          Σημειώσεις:
          <Input.TextArea
            rows={4}
            name="notes"
            value={_server.notes}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item style={style.formitem}>
          Κατάσταση:
          <Switch
            checked={_server.status}
            onChange={value => inputChangeHandler('status', value)}
            checkedChildren="_server ON"
            unCheckedChildren="_server OFF"
          />
        </Form.Item>
        <Form.Item style={style.formitem} label="Κλάδος">
          <Select
            style={{ width: 120 }}
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
