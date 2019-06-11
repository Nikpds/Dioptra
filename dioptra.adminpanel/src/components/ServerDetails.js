import React from 'react'
import { Form, Icon, Input, Button, Switch, Radio } from 'antd'
const ServerDetails = props => {
  const { TextArea } = Input
  let newserver = true
  let title = newserver ? 'Νέος Server' : 'Server Name'
  return (
    <div>
      <h1 style={{textAlign:"center", color: 'red'}}> {title} </h1>
      <Form>
        <Form.Item>
          Όνομα:
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            value={props.name}
          />
        </Form.Item>
        <Form.Item>
          IP:
          <Input
            prefix={
              <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="IP Api"
            value={props.ApiIP}
          />
          <Input
            prefix={
              <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Port API"
            value={props.portApi}
          />
        </Form.Item>
        <Form.Item>
          IP Χάρτη:
          <Input
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Ip Χάρτη"
            value={props.mapIp}
          />
          <Input
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Map Port"
            value={props.mapPort}
          />
        </Form.Item>
        <Form.Item>
          Θύρα Βάσης:
          <Input
            prefix={
              <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Port DB"
            value={props.portDB}
          />
        </Form.Item>
        <Form.Item>
          Username DB:
          <Input
            prefix={
              <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Username DB"
            value={props.usernameDB}
          />
        </Form.Item>
        <Form.Item>
          Password DB:
          <Input
            prefix={
              <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Password DB"
            value={props.passwordDB}
          />
        </Form.Item>
        <Form.Item>
          Linux Κωδικός:
          <Input
            prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Linux Code"
            value={props.linuxcode}
          />
        </Form.Item>
        <Form.Item>
          Επικοινωνία:
          <Input
            prefix={
              <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Όνομα Επικοινωνίας"
            value={props.contactname}
          />
          <Input
            prefix={
              <Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Τηλέφωνο"
            value={props.contactPhone}
          />
        </Form.Item>
        <Form.Item>
          Σημειώσεις:
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          Κατάσταση:
          <Switch />
        </Form.Item>
        <Form.Item label="Κλάδος">
          <Radio.Group>
            <Radio.Button value="a" >ΓΕΕΘΑ</Radio.Button>
            <Radio.Button value="b">ΣΤΡΑΤΟΣ</Radio.Button>
            <Radio.Button value="c">ΠΝ</Radio.Button>
            <Radio.Button value="d">ΓΕΑ</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Άκυρο
          </Button>
          <Button type="danger" htmlType="submit">
            Διαγραφή
          </Button>
          <Button type="primary" htmlType="submit">
            Αποθήκευση
          </Button>
        </Form.Item>
        <Button type="primary" htmlType="reset">
          Καθάρισμα Φόρμας
        </Button>
      </Form>
    </div>
  )
}

export default ServerDetails
