import React, { useState } from 'react';
import ServerCard from '../ServerCard.js';

const DashboardContainer = () => {

  //Server Data
  const [myData, setMyData] = useState(
    [{
      name: "Server 1",
      status: 'online',
      ip: "11.1.48.249"
    },
    {
      name: "Server2",
      status: "online",
      ip: "11.1.51.7"
    },
    {
      name: "Server 3",
      status: "offline",
      ip: "11.1.48.217"
    },
    {
      name: "Server 4",
      status: "offline",
      ip: "11.1.48.157"
    }]);

    const servs = myData.map((item) => <ServerCard name={item.name} status={item.status} ip={item.ip} />)

    return (
        <div>
          This is Dashboard Container 
          {servs}
        </div>
    );
};

export default DashboardContainer;