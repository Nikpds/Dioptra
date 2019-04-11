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
                mode="vertical"
                className="is-fullheight">
                <Menu.Item key="0" onClick={toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    <span>Close</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <NavLink to="/hdm">
                        <Icon type="fire" />
                        <span>ΗΔΜ</span>
                    </NavLink>
                </Menu.Item>
                <Menu.SubMenu key="sub1" title={<NavLink to="/jrflFrequencies"><span><Icon type="appstore" /><span>JRFL</span></span></NavLink>}>
                    <Menu.Item key="sub1.1" to="/certificate/issued">
                        <NavLink to="/jrflFrequencies">
                            Συχνότητες JRFL
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub1.2" to="/certificate/issued">
                        <NavLink to="/jrflType">
                            Τύποι JRFL
                        </NavLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub2" title={<span><Icon type="safety-certificate" /><span>ΕΒΔΗΠ</span></span>}>
                    <Menu.Item key="sub2.1">Option sub2.1</Menu.Item>
                    <Menu.Item key="sub2.2">Option sub2.2</Menu.Item>
                    <Menu.SubMenu key="sub2.3" title="Submenu sub2.3">
                        <Menu.Item key="sub2.3.1">Option sub2.3.1</Menu.Item>
                        <Menu.Item key="sub2.3.2">Option sub2.3.2</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub3" title={<span><Icon type="bars" /><span>Πάγια Στοιψεία</span></span>}>
                    <Menu.Item key="sub3.1">Option sub3.1</Menu.Item>
                    <Menu.Item key="sub3.2">Option sub3.2</Menu.Item>
                    <Menu.SubMenu key="sub3.3" title="Submenu sub3.3">
                        <Menu.Item key="sub3.3.1">Option sub3.3.1</Menu.Item>
                        <Menu.Item key="sub3.3.2">Option sub3.3.2</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub4" title={<span><Icon type="notification" /><span>Εντολές ΗΠ</span></span>}>
                    <Menu.Item key="sub4.1">Option sub4.1</Menu.Item>
                    <Menu.Item key="sub4.2">Option sub4.2</Menu.Item>
                    <Menu.SubMenu key="sub4.3" title="Submenu sub4.3">
                        <Menu.Item key="sub4.3.1">Option sub4.3.1</Menu.Item>
                        <Menu.Item key="sub4.3.2">Option sub4.3.2</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub5" title={<span><Icon type="file-text" /><span>Εντολές ΗΠ</span></span>}>
                    <Menu.Item key="sub5.1">Option sub5.1</Menu.Item>
                    <Menu.Item key="sub5.2">Option sub5.2</Menu.Item>
                    <Menu.SubMenu key="sub5.3" title="Submenu sub5.3">
                        <Menu.Item key="sub5.3.1">Option sub5.3.1</Menu.Item>
                        <Menu.Item key="sub5.3.2">Option sub5.3.2</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.Item key="2">
                    <Icon type="message" />
                    <span>Ανταλαγή Μηνυμάτων</span>
                </Menu.Item>
                <Menu.SubMenu key="sub6" title={<span><Icon type="file-text" /><span>Διαχείριση</span></span>}>
                    <Menu.Item key="sub6.1">Option sub6.1</Menu.Item>
                    <Menu.Item key="sub6.2">Option sub6.2</Menu.Item>
                    <Menu.SubMenu key="sub6.3" title="Submenu sub6.3">
                        <Menu.Item key="sub6.3.1">Option sub6.3.1</Menu.Item>
                        <Menu.Item key="sub6.3.2">Option sub6.3.2</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;