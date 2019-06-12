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
const InputGroup = Input.Group
const { Option, getMentions } = Mentions
const { TextArea } = Input

const ServerDetails = props => {
  const newserver = false
  const [server, setServer] = useState(props.server)

  let title = server.id ? server.serverName : 'Νέος Server'

  const inputChangeHandler = (name, value) => {
    console.log(name, value)
    setServer({
      ...server,
      [name]: value
    })
  }

  const handleReset = e => {
    e.preventDefault()
    props.form.resetFields()
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
        <h1> {title} </h1>
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
                value={server.serverName}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <InputGroup size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>IP:</Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="IP Api"
                  name="serverIp"
                  value={server.serverIp}
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
                  value={server.serverPort}
                  name="serverPort"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <InputGroup size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>IP Χάρτη:</Col>
              <Col span={8}>
                <Input
                  prefix={
                    <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Ip Χάρτη"
                  value={server.mapIP}
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
                  value={server.mapPort}
                  name="mapPort"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>

        <Form.Item>
          <InputGroup size="large" style={style.formitem}>
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
                  value={server.portDB}
                  name="portDB"
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>
        <Form.Item>
          <InputGroup size="large" style={style.formitem}>
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
                  value={server.usernameDB}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>

        <Form.Item>
          <InputGroup size="large" style={style.formitem}>
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
                  value={server.passwordDB}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>
        <Form.Item style={style.formitem}>
          <InputGroup size="large" style={style.formitem}>
            <Row gutter={8}>
              <Col span={5}>Linux Κωδικός:</Col>
              <Col span={16}>
                <Input
                  prefix={
                    <Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Linux Code"
                  name="linuxCode"
                  value={server.linuxCode}
                  onChange={e =>
                    inputChangeHandler(e.target.name, e.target.value)
                  }
                />
              </Col>
            </Row>
          </InputGroup>
        </Form.Item>

        <InputGroup size="large" style={style.formitem}>
          <Row gutter={8}>
            <Col span={5}>Επικοινωνία:</Col>
            <Col span={8}>
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Όνομα Επικοινωνίας"
                name="contactname"
                value={server.contactname}
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
                value={server.contactphone}
                onChange={e =>
                  inputChangeHandler(e.target.name, e.target.value)
                }
              />
            </Col>
          </Row>
        </InputGroup>
        <Form.Item style={style.formitem}>
          Σημειώσεις:
          <TextArea
            rows={4}
            name="notes"
            value={server.notes}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item style={style.formitem}>
          Κατάσταση:
          <Switch
            checked={server.status}
            onChange={value => inputChangeHandler('status', value)}
            checkedChildren="Server ON"
            unCheckedChildren="Server OFF"
          />
        </Form.Item>
        <Form.Item style={style.formitem}>
          Κλάδος:
          <Radio.Group
            name="klados"
            value={server.klados}
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}>
            <Radio.Button value="ΓΕΕΘΑ" style={{color:'black', backgroundColor:'#990000'}}>ΓΕΕΘΑ</Radio.Button>
            <Radio.Button value="ΣΤΡΑΤΟΣ" style={{color:'black', backgroundColor:'#666633'}}>ΣΤΡΑΤΟΣ</Radio.Button>
            <Radio.Button value="ΠΝ" style={{color:'black', backgroundColor:'#0033cc'}}>ΠΝ</Radio.Button>
            <Radio.Button value="ΓΕΑ" style={{color:'black', backgroundColor:'#0099ff'}}>ΓΕΑ</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={props.cancel}>
            Άκυρο
          </Button>
          <Button type="danger" htmlType="submit" onClick={props.delete}>
            Διαγραφή
          </Button>
          <Button type="primary" htmlType="submit" onClick={props.save}>
            {newserver ? 'Αποθήκευση Νέου' : 'Αποθήκευση Αλλαγών'}
          </Button>
        </Form.Item>
        <Button type="primary" htmlType="reset" onClick={() => handleReset()}>
          {newserver ? 'Καθάρισμα Φόρμας' : 'Αρχικές Τιμές'}
        </Button>
      </Form>
    </div>
  )
}

export default ServerDetails
