import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Col, Card } from 'antd';

const ServerCard = props => {
    const [name, setName] = useState(props.name)
    const [status, setStatus] = useState('')
    const [ip, setIp] = useState('')

    console.log("Data ", props.name)

    return (
        <div>
            <Card
                title={name}
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
            >
                <Row>
                    <Col lg={{ span: 4 }} xl={{ span: 4 }}>
                        <p>Status</p>
                    </Col>
                    <Col lg={{ span: 12 }} xl={{ span: 48 }}>
                        <Icon style={{ fontSize: '18px', color: 'green', align: 'right' }} type="check-circle" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 2 }} xl={{ span: 3 }}>
                        <p>Ping</p>
                    </Col>
                    <Col lg={{ span: 2 }} xl={{ span: 3 }}>
                        <Icon style={{ fontSize: '18px', color: 'green', align: 'right' }} type="check-circle" />
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ServerCard;