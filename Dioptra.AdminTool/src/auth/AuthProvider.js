import React, { useState } from 'react';


export const AuthContext = React.createContext({
    isAuthenticated: true,
    signIn: () => { },
    signOut: () => { }
});

const AuthProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const signIn = (username, password) => {
        //const body = { Username: username, password: password }
        //Post('/auth/token', body);
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

