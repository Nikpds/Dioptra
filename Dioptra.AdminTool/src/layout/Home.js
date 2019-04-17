import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ServersTree from '../components/ServersTree';
import Errors from '../components/Errors';
import StatusInfo from '../components/StatusInfo';

export const ErrorContext = React.createContext({
  errors: []
});
const Home = () => {
  const [errors, setErrors] = useState([]);

  const addError = (t, message) => {
    const updatedErrors = [...errors];
    const d = new Date();
    const time = d.getHours() + ':' + d.getMinutes();
    updatedErrors.push(
      { title: t, description: message, date: time }
    );
    setErrors(pre => [...updatedErrors]);
  }

  return (
    <ErrorContext.Provider value={{ addError, errors }} >
      <Row style={{ paddingTop: 40 }}>
        <Col span={17}>
          <ServersTree />
        </Col>
        <Col span={6}>
          <StatusInfo />
          <Errors />
        </Col>
      </Row>
    </ErrorContext.Provider>
  );
};

export default Home;