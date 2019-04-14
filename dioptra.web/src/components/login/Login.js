import React, { useState, useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { Form, Icon, Input, Button, Row, Col, Card, Typography } from 'antd';
import '../../styles/Utilities.sass';
import './Login.sass';

const Login = props => {
    const authContext = useContext(AuthContext);
    const [loginModel, setLoginModel] = useState({
        username: '',
        password: ''
    });
    const inputsHandler = (e) => {
        setLoginModel({
            ...loginModel,
            [e.target.name]: e.target.value
        });
    }
    const clearUsernameHandler = () => {
        setLoginModel({ ...loginModel, username: '' });
    }
    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
    const loginHandler = async () => {
        const body = {
            username: loginModel.username,
            password: loginModel.password
        }
        const res = await fetch('http://localhost:50971/api/auth/token', {
            body: JSON.stringify(body),
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.ok) {
            const data = await res.json();
            if (data && data.token) {
                authContext.signIn(data.token);
            }
        }
    }
    const clearButton = loginModel.username ? <Icon type="close-circle" onClick={clearUsernameHandler} /> : null;
    return (
        <Row className="is-fullheight login-bck" type="flex" justify="space-around" align="middle">
            <Col lg={{ span: 10 }} xl={{ span: 7 }} xxl={{ span: 5 }}>
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
                                name="username"
                                autoComplete="username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={clearButton}
                                value={loginModel.username}
                                onChange={inputsHandler} />
                        </Form.Item>
                        <Form.Item
                            className="m0"
                            label="Κωδικός"
                            {...formItemLayout}>
                            <Input.Password
                                autoComplete="password"
                                name="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={loginModel.password}
                                onChange={inputsHandler}
                                placeholder="Your password"
                                onPressEnter={loginHandler} />
                        </Form.Item>
                        <Form.Item className="mb-5">
                            <span className="" >Ξέχασα τον κωδικό μου</span>
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