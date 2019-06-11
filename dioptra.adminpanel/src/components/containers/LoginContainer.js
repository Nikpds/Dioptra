import React from 'react'
import Login from '../Login'

const LoginContainer = () => {

    const login = (username, password) => {

    }

    return (
        <div style={{ color: 'black' }}>
            <Login login={login} />
        </div>
    );
};

export default LoginContainer;