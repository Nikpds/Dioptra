import React, { useState, useContext } from 'react';
import { Form, Icon, Input, Button, Row, Col, Card, Typography } from 'antd';
import '../../styles/Utilities.sass';
import { AuthContext } from '../../auth/AuthContext';
import './Login.sass';
const Login = props => {
    const auth = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const clearUsernameHandler = () => {
        setUsername('');
    }
    const formItemLayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const loginHandler = () => {
        auth.signIn(username, password);
    }

    const clearButton = username ? <Icon type="close-circle" onClick={clearUsernameHandler} /> : null;

    return (
        <Row className="is-fullheight login-bck" type="flex" justify="space-around" align="middle">
            <Col lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 5 }}>
                <Card className="card-center">
                    <Form >
                        <Typography.Title className="text-center mb-5" level={3}>
                            Σύνδεση
                            </Typography.Title>
                        <Form.Item className="m0"
                            label="Όνομα Χρήστη"
                            {...formItemLayout}>
                            <Input
                                placeholder="Enter your username"
                                autoComplete="username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={clearButton}
                                value={username}
                                onChange={usernameHandler} />
                        </Form.Item>
                        <Form.Item
                            className="m0"
                            label="Κωδικός"
                            {...formItemLayout}>
                            <Input.Password
                                autoComplete="password"
                                value={password}
                                onChange={passwordHandler}
                                placeholder="input password" />
                        </Form.Item>
                        <Form.Item className="mb-5">
                            <a className="" href="">Ξέχασα τον κωδικό μου</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={loginHandler} block> Check</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};


export default Login;