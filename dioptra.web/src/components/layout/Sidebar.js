import { strings } from '../../localization/LocalizationProvider';
import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from '../../assets//logo.png';
import './Layout';
const { Sider } = Layout;
const Sidebar = props => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Sider className="sidebar" collapsed={collapsed}>
            <Menu selectable={false}
                mode="vertical"
                className="is-fullheight">
                <div className="logo-item" key="0">
                    <img src={logo} />
                    <span className="logo" >{strings.sidebar.thales}</span>
                </div>
                <Menu.Item key="1" onClick={toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    <span>{strings.sidebar.close}</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/">
                        <Icon type="home" />
                        <span>{strings.sidebar.home}</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/eob">
                        <Icon type="global" />
                        <span>{strings.sidebar.eob}</span>
                    </NavLink>
                </Menu.Item>
                <Menu.SubMenu key="sub1" title={<span><Icon type="appstore" />
                    <span>{strings.sidebar.jrfl}</span></span>}>
                    <Menu.Item key="sub1.1">
                        <NavLink to="/jrflFrequencies">
                            {strings.sidebar.jrflfreq}
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub1.2">
                        <NavLink to="/jrflType">
                            {strings.sidebar.jrfltypes}
                        </NavLink>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;