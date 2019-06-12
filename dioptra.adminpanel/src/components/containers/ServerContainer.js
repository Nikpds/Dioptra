import React from 'react'
import ServerDetails from '../ServerDetails'
import serverInfo from '../../serverInfo'

const ServerContainer = props => {
  const serverApi = 'https://jsonplaceholder.typicode.com/posts'
  const server = {
    serverId: 1,
    serverName: 'server name 1',
    serverIp: '192.168.1.1',
    serverPort: '9000',
    mapIP: '192.168.1.2',
    mapPort: '8443',
    portDB: '27017',
    usernameDB: 'namebd1',
    passwordDB: '123',
    linuxCode: '456',
    contactname: 'markantasis',
    contactphone: '2101234567',
    notes: 'bla bla',
    klados: 'ΓΕΑ',
    status: true
  }
  const cancel = () => {
    console.log('cancel server')
  }
  const deleteHandler = () => {
    serverInfo.delete(serverApi, 1).then()
    console.log('delete server')
  }
  const save = (props) => {
      console.log('is saving...');
      console.log(props);
    serverInfo.post('/servers', server)
    console.log('server saved')
  }

  const clear = () => {
    console.log('clear server')
  }

  return (
    <ServerDetails
      cancel={cancel}
      delete={deleteHandler}
      save={props =>save(props)}
      clear={clear}
      server={server}
    />
  )
}

export default ServerContainer
