import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import Navbar from './Navbar';
import { Layout as LayoutC } from 'antd';
import Sidebar from './Sidebar';
import '../../styles/Utilities.sass';

const { Content } = LayoutC;

const Layout = props => {
    const auth = useContext(AuthContext)
    const cssHeight = auth.isAuthenticated ? 'calc-h' : 'is-fullheight';
    const navbar = auth.isAuthenticated ? <Navbar /> : null;
    const sidebar = auth.isAuthenticated ? <Sidebar /> : null;
    return (
        <React.Fragment>
            <LayoutC>
                {navbar}
            </LayoutC>
            <LayoutC className={cssHeight}>
                {sidebar}
                <Content className="is-fullheight">
                    {props.children}
                </Content>
            </LayoutC>
        </React.Fragment>
    );
};

export default Layout;