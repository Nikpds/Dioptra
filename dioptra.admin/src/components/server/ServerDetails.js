import React, { useState, useEffect } from 'react'
import {
  Form,
  Icon,
  Input,
  Switch,
  Select,
  Col,
  Row,
  Checkbox,
  Card
} from 'antd'
import { klados } from '../../services/Enums'
import ServerContainer from '../containers/ServerContainer'
import PageHeader from '../shared/PageHeader'
import { StatusTag } from '../../services/Utilities'
const section = klados

const ServerForm = ({ onCancel, onDelete, onSave, onBack, server }) => {
  const [_server, setServer] = useState(server)

  const inputChangeHandler = (name, value) => {
    console.log(name, value)
    setServer({
      ..._server,
      [name]: value
    })
  }

  useEffect(() => {
    setServer(server)
  }, [server])

  const title = _server.id ? _server.title : 'New Server'
  const subtitle = _server.id ? (
    <StatusTag status={_server.status} hasLabel />
  ) : (
    'Please fill up all fields to add new server'
  )

  return (
    <div>
      <PageHeader     
        title={title}
        subtitle={subtitle}
        onBack={onBack}
        actions={[
          { onClick: onCancel, name: 'Cancel', type: 'default' },
          {
            onClick: onDelete,
            name: 'Delete',
            type: 'danger',
            show: !server.id
          },
          { onClick: () => onSave(_server), name: 'Save', type: 'primary' }
        ]}
      />

      <Card className="card-shadow" style={{ margin: '20px' }}>
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
            {/* <Input
            prefix={
              <Icon type="desktop" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            value={_server.apiPort}
            name="apiPort"
            onChange={e => inputChangeHandler(e.target.name, e.target.value)}
          /> */}
          </Form.Item>
          <Form.Item label="Map Ip ">
            <Input
              prefix={
                <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              value={_server.mapIp}
              name="mapIp"
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Username">
            <Input
              prefix={
                <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              name="username"
              value={_server.username}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              prefix={
                <Icon type="database" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              name="password"
              value={_server.password}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Db Username">
            <Input
              prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="dbUsername"
              value={_server.dbUsername}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="DB Password">
            <Input
              prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="dbPassword"
              value={_server.dbPassword}
              onChange={e => inputChangeHandler(e.target.name, e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Επικοινωνία">
            <Row gutter={4}>
              <Col span={12}>
                <Input
                  prefix={
                    <Icon
                      type="contacts"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
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
                    <Icon
                      type="contacts"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
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
            <Col span={12}>
              <Switch
                checked={_server.isActive}
                onChange={value => inputChangeHandler('isActive', value)}
                checkedChildren="Server ON"
                unCheckedChildren="Server OFF"
              />
            </Col>
            <Col span={12}>
              <Checkbox
                checked={_server.pingTestActive}
                onChange={value =>
                  inputChangeHandler('pingTestActive', value.target.checked)
                }>
                Enable ping checks
              </Checkbox>
            </Col>
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
        </Form>
      </Card>
    </div>
  )
}

const ServerDetails = () => (
  <ServerContainer>
    <ServerForm />
  </ServerContainer>
)

export default ServerDetails
