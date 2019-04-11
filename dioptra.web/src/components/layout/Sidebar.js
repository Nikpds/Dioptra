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
                mode="vertical"
                className="is-fullheight">
                <Menu.Item key="0" onClick={toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    <span>Close</span>
                </Menu.Item>
                <Menu.SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;