import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext'
import { Menu, Icon, Layout } from 'antd';
import './Layout.sass';
import '../../styles/Utilities.sass';
const { Header } = Layout;
const Navbar = props => {
    const auth = useContext(AuthContext);
    return (
        <Header className="header">
            <Menu mode="horizontal" className="menu">
                <Menu.Item key="1" className="menu-item">
                    <NavLink to="/" className="menu-item"><Icon type="home" />Αρχική</NavLink>
                </Menu.Item>             
                <Menu.Item key="99" className="menu-item is-right" onClick={auth.signOut}>
                    <Icon type="logout" />Αποσύνδεση
                </Menu.Item>
            </Menu>
        </Header>

    );
};

export default Navbar;