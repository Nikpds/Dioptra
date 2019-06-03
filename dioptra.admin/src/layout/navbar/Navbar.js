import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import './Navbar.sass';
import logo from '../../assets/logo.png';
const { Header } = Layout;

const navbar = props => {
    return (
        <Header className="header">
            <Menu mode="horizontal" className="menu">
                <Menu.Item key="1" className="menu-item-hover">
                    <NavLink to="/" className="menu-item">
                        <img src={logo} alt='...' />
                        Thales Monitor
                    </NavLink>
                </Menu.Item>
                {/* <Menu.Item key="3" className="right menu-item" onClick={auth.signOut}>
                    <Icon type="logout" />Αποσύνδεση
                </Menu.Item> */}
            </Menu>
        </Header>

    );
};

export default navbar;