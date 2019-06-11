import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ServersTree from '../components/ServersTree';
import Errors from '../components/Errors';
import StatusInfo from '../components/StatusInfo';

export const ErrorContext = React.createContext({
  errors: [],
  clearErrors: () => { },
  addError: (title, message) => { }
});
const Home = () => {
  const [errors, setErrors] = useState([]);
  const addError = (t, message) => {
    const d = new Date();
    const min = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
    const time = d.getHours() + ':' + min;
    if (errors.length > 100) {
      setErrors(pre => pre.slice(0, 50));
    } else {
      setErrors(pre => [{ title: t, description: message, date: time }, ...pre]);
    }
  }
  const clearErrors = () => {
    setErrors(pre => []);
  }

  return (
    <ErrorContext.Provider value={{ addError, errors, clearErrors }} >
      <Row style={{ paddingTop: 20 }}>
        <Col span={16}>
          <ServersTree />
        </Col>
        <Col span={8} style={{ paddingRight: 30 }}>
          <StatusInfo />
          <Errors />
        </Col>
      </Row>
    </ErrorContext.Provider>
  );
};

export default Home;