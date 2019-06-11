import React from 'react';
import ServerDetails from '../ServerDetails';

const ServerContainer = (props) => {
    const servers = [
        {
            serverName: 'server name 1',
            serverIp: '192.168.1.1',
            serverPort: '9000',
            mapIP: '192.168.1.2',
            mapPort:'8443',
            portDB: '27017',
            usernameDB: 'namebd1',
            passwordDB:'123',
            linuxCode: '456',
            constactname: 'markantasis',
            contactphone: '2101234567',
            notes: 'bla bla',
            klados: 'a',
            status: false
        }
    ];
    const instert = () => {
        console.log("insert server");
    }

    const update = () => {
        console.log("update server");
    }

    const del = () => {
        console.log("delete server");
    }

    
    return (
        <div>
            <ServerDetails 
                delete={this.del}
                update={this.update}
                instert={this.instert}
            />
        </div>
    );
};

export default ServerContainer;