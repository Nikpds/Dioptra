import React, { useState, useEffect, useContext } from 'react';
import { Card, Icon, Badge, Typography as T } from 'antd';
import '../styles/tree.css';
import { ErrorContext } from '../layout/Home';
import { callFetch } from '../services/HttpService';
const ServerNode = props => {
    //const url = props.server.protocol + '://' + props.server.ip + ':9000/api';
    const url = 'http://192.168.48.62:9001/api';
    const ctx = useContext(ErrorContext);
    const [reload, setReload] = useState(false);
    const [status, setStatus] = useState({
        serverUp: false,
        nginxUp: false,
        apiUp: false
    });

    useEffect(() => {
        console.log('[Debug]', 'Starting Server Requests for ', props.server.ip);
        serverCheck();
        nginxCheck();
        apiCheck();
    }, [reload, props.reload]);

    const reloadHandler = () => {
        setReload(previousState => !previousState);
    }
    const nginxCheck = () => {
        callFetch('http://' + props.server.ip + ':9100', 'GET').then(res => {
            if (res) {
                setStatus((lastState) => {
                    return {
                        ...lastState,
                        nginxUp: true
                    }
                });
            } else {
                ctx.addError('Σφαλμα δικτύου '  + props.server.name,
                'Δίκτυο μη προσβάσιμο');
            }
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
        });

    }
    const apiCheck = async () => {
        const data = {
            serverIP: props.server.ip,
            serverProtocol: props.server.protocol,
            serverPort: props.server.port
        }
        await callFetch(url + '/ffa/server/toserver/isalive', 'post', data).then(res => {
            if (res === '"serverisalive"') {
                setStatus((lastState) => {
                    return {
                        ...lastState,
                        apiUp: true
                    }
                });
            } else {
                ctx.addError('Thales Application ' + props.server.name,
                 'Application is down or not responding');
            }
        });
    }

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
                title={<div><Icon type="hdd" theme="twoTone" /> {props.server.name} </div>}
                actions={[
                    <span onClick={reloadHandler}><Icon type="redo" title="Refresh" /> Ανανέωση</span>]}
                style={{ width: 150 }}>
                <p><T.Text strong={true}>Ping</T.Text>
                    {server}
                </p>
                <p><T.Text strong={true}>Nginx</T.Text>
                    {nginx}
                </p>
                <p><T.Text strong={true}>Https</T.Text>
                    {api}
                </p>
            </Card>
        </li >
    );
};

export default ServerNode;