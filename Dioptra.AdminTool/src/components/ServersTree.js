import React, { useState, useEffect } from 'react';
import '../styles/tree.css';
import { Card, Icon, Typography as T, Button } from 'antd';
import ServerNode from './ServerNode';
import { servers } from '../services/Servers';
const ServersTree = () => {
    const [reload, setReload] = useState(false);
    const reloadHandler = () => {
        setReload(previousState => !previousState);

    }
    // console.log(window.location.href);
    useEffect(() => {

    }, [reload]);


    const mainServer = servers.find(x => x.isMain);
    const serverItems = servers.map(s => !s.isMain ?
        <ServerNode server={s} key={s.name} reload={reload} /> : null
    );
    console.log('it runs');
    return (
        <div className="tree">
            <ul className="ul-tree">
                <li className="li-tree" >
                    <Card
                        className="panel"
                        size="small"
                        title={<div><Icon type="hdd" theme="twoTone" /> {mainServer.name}</div>}
                        style={{ width: 150 }} >
                        <p><T.Text strong={true}>Ip: </T.Text> <span className="is-right">{mainServer.ip}</span></p>
                        <p><Button onClick={reloadHandler} type="primary" block size="small" icon="redo">Επανέλεγχος</Button></p>
                    </Card>
                    <ul className="ul-tree">
                        {serverItems}
                    </ul>
                </li>
            </ul>
        </div >
    );
};

export default ServersTree;