import React, { useContext } from 'react';

import { Layout as LayoutC } from 'antd';
import { AuthContext } from '../auth/AuthProvider';
import Navbar from './navbar/Navbar';
const { Content } = LayoutC;

const Layout = props => {
    const auth = useContext(AuthContext)
    const cssHeight = auth.isAuthenticated ? 'calcheight' : 'isfullheight';
    const toolbar = auth.isAuthenticated ? <Navbar /> : null;
    return (
        <React.Fragment>
            <LayoutC>
                {toolbar}
            </LayoutC>
            <LayoutC className={cssHeight}>              
                <Content className="isfullheight">
                    {props.children}
                </Content>
            </LayoutC>
        </React.Fragment>
    );
};

export default Layout;