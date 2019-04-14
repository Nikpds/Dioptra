import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = () => {
        setIsAuthenticated(true);
    }
    const signOut = () => {
        setIsAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

