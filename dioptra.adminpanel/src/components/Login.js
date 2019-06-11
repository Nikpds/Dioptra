import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    return (
        <Row type="flex" justify="space-around" align="middle">
            <Col span={6}>
                <Form onSubmit={() => props.login(username, password)} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;