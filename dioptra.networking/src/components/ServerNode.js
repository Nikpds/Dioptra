import React, { useState, useEffect, useContext } from 'react';
import { Card, Icon, Badge, Typography as T, Spin } from 'antd';
import '../styles/tree.css';
import { ErrorContext } from '../layout/Home';
import { callFetch } from '../services/HttpService';
const ServerNode = props => {
    const currentIp = (window.location.href.substr(8)).split(':')[0];
    const url = 'https://' + currentIp + ':9000/api';
    const ctx = useContext(ErrorContext);
    const [loading, setLoading] = useState(0);
    const [reload, setReload] = useState(false);
    const [status, setStatus] = useState({
        serverUp: false,
        nginxUp: false,
        apiUp: false
    });

    useEffect(() => {
        serverCheck();
        nginxCheck();
        apiCheck();
        setLoading(3);
    }, [reload, props.reload]);

    const reloadHandler = () => {
        setReload(previousState => !previousState);
    }
    const nginxCheck = () => {
        callFetch(url + '/ffa/status/nginx/' + props.server.ip, 'GET').then(res => {
            setStatus((lastState) => {
                return {
                    ...lastState,
                    nginxUp: res === "true"
                }
            });
            if (!(res === "true")) {
                ctx.addError('Nginx Error ' + props.server.name,
                    'Δίκτυο μη προσβάσιμο');
            }
            setLoading(l => l - 1);
        });
    }

    const serverCheck = () => {
        const data = { serverIP: props.server.ip }
        callFetch(url + '/ffa/server/ping', 'POST', data).then(res => {
            setStatus((lastState) => {
                return {
                    ...lastState,
                    serverUp: res
                }
            });
            if (!res) {
                ctx.addError('Ping Error ' + props.server.name,
                    'Application Down or unreachable');
            }
            setLoading(l => l - 1);
        });

    }
    const apiCheck = async () => {
        const data = {
            serverIP: props.server.ip,
            serverProtocol: props.server.protocol,
            serverPort: props.server.port
        }
        await callFetch(url + '/ffa/server/toserver/isalive', 'post', data).then(res => {
            setStatus((lastState) => {
                return {
                    ...lastState,
                    apiUp: res === '"serverisalive"'
                }
            });
            if (res !== '"serverisalive"') {
                ctx.addError('Https Error  ' + props.server.name,
                    'Application is down or not responding');
            }
            setLoading(l => l - 1);
        });
    }
    const reloadButton = loading != 0 ? <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} /> :
        <span onClick={reloadHandler}><Icon type="redo" title="Refresh" /> Ανανέωση</span>
    const statusColor = (check) => { return check ? '#52c41a' : '#f5222d' };
    const api = <Badge className="is-right" count={status.apiUp ? 'Up' : 'Down'}
        style={{ backgroundColor: statusColor(status.apiUp) }} />;
    const nginx = <Badge className="is-right" count={status.nginxUp ? 'Up' : 'Down'}
        style={{ backgroundColor: statusColor(status.nginxUp) }} />;
    const server = <Badge className="is-right" count={status.serverUp ? 'Up' : 'Down'}
        style={{ backgroundColor: statusColor(status.serverUp) }} />;
    return (
        <li className="li-tree">
            <Card
                className="panel"
                size="small"
                title={<div><Icon type="hdd" theme="twoTone" title={props.server.ip} /> {props.server.name} </div>}
                actions={[reloadButton]}
                style={{ width: 150 }}>
                <p><T.Text strong={true}>Ping</T.Text>
                    {server}
                </p>
                <p><T.Text strong={true}>Nginx</T.Text>
                    {nginx}
                </p>
                <p><T.Text strong={true}>Application</T.Text>
                    {api}
                </p>
            </Card>
        </li >
    );
};

export default ServerNode;