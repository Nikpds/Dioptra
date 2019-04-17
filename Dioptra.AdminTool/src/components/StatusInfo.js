import React from 'react';
import { List, Card, Typography as T, Icon, Badge } from 'antd';
import './StatusInfo.css';
const StatusInfo = () => {
    const data = [
        {
            name: 'Ping', icon: 'code', cases: [
                { status: 'success', description: 'Virtual Machine is running' },
                { status: 'error', description: 'Virtual Machine is down or network is unreachable' }
            ]
        }, {
            name: 'Nginx', icon: 'api', cases: [
                { status: 'success', description: 'Http request reaches Nginx' },
                { status: 'error', description: 'Unreachable Network' }
            ]
        }, {
            name: 'Server', icon: 'hdd', cases: [
                { status: 'success', description: 'Https request reaches API (server)' },
                { status: 'error', description: 'Unreachable Network or Https Failure (if nginx is green)' }
            ]
        }];


    return (
        <Card bodyStyle={{ padding: 0 }} className="mb-2">
            {data.map(d =>
                <List key={d.name}
                    size="small"
                    header={<T.Text strong>
                        <Icon type={d.icon} className="mr-2" theme="twoTone" />
                        {d.name} </T.Text>}
                    bordered
                    dataSource={d.cases}
                    renderItem={item => (
                        <List.Item >
                            <List.Item.Meta
                                title={<span >{item.success}</span>}
                                description={item.description}
                            />
                            <div> <Badge status={item.status} /></div>
                        </List.Item>
                    )}></List >
            )}
        </Card>
    );
};

export default StatusInfo;