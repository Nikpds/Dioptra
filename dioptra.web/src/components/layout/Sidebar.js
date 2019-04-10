import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import './Layout';
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Sider className="sidebar" collapsed={collapsed}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="is-fullheight">
                <Menu.Item key="0" onClick={toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    <span>Close</span>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;