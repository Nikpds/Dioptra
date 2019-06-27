import React, { useState, useEffect } from 'react';
import '../styles/tree.css';
import { Card, Icon, Typography as T, Button, Layout, PageHeader, Menu, Dropdown } from 'antd';
import ServerNode from './ServerNode';
import { servers } from '../services/Servers';
const ServersTree = () => {
    const [reload, setReload] = useState(false);
    const [timeToReload, setTimeToReload] = useState(300000);
    const reloadHandler = () => {
        setReload(previousState => !previousState);

    }
    const currentIp = (window.location.href.substr(8)).split(':')[0];
    const mainServer = servers.find(x => x.ip === currentIp);
    useEffect(() => {
        const job = setInterval(() => {
            setReload(pre => !pre);
        }, timeToReload);
        return () => { clearInterval(job); }
    }, [timeToReload]);

    useEffect(() => {

    }, [reload]);
    const serverItems = servers.map(s => s.ip !== currentIp ?
        <ServerNode server={s} key={s.name} reload={reload}  /> : null
    );
    const reloadTimeHandler = (time) => {
        setTimeToReload(time);
    }
    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={() => reloadTimeHandler(60000)}>
                1 λεπτό
            </Menu.Item>
            <Menu.Item key="1" onClick={() => reloadTimeHandler(300000)}>
                5 λεπτά
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={() => reloadTimeHandler(600000)}>
                10 λεπτά</Menu.Item>
            <Menu.Item key="4" onClick={() => reloadTimeHandler(1800000)}>
                30 λεπτά</Menu.Item>
        </Menu>
    );
    const content = (
        <div className="content" >
            <T.Paragraph>
                Τα δεδομένα ανανεώνονται κάθε πέντε (5) λεπτά απο προεπιλογή. Επιλέξτε διαφορετική συχνήτητα ανανέωσης παρακάτω.
          </T.Paragraph>
            <Button onClick={reloadHandler} type="primary" style={{ marginRight: 20 }} size="small" icon="redo">Επανέλεγχος</Button>
            <Dropdown overlay={menu} trigger={['click']}>
                <span className="ant-dropdown-link is-link">
                    Ρυθμός ανανέωσης {timeToReload / 60000} λεπτά <Icon type="down" />
                </span>
            </Dropdown>
        </div>)

    return (
        <Layout>
            <PageHeader title="Παρακολούθηση Διακομιστών Θαλή" style={{ padding: 10, marginLeft: 30, marginRight: 30 }}>
                <div className="wrap" style={{ marginTop: -12 }}>
                    <div className="content">{content}</div>
                </div>
            </PageHeader>
            <div className="tree">
                <ul className="ul-tree">
                    <li className="li-tree" >
                        <Card
                            className="panel"
                            size="small"
                            title={<div><Icon type="hdd" theme="twoTone" /> {mainServer.name}</div>}
                            style={{ width: 150 }} >
                            <T.Text strong={true}>Ip: </T.Text> <span className="is-right">{mainServer.ip}</span>
                        </Card>
                        <ul className="ul-tree">
                            {serverItems}
                        </ul>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default ServersTree;