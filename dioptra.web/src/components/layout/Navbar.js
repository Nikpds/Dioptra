import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { strings } from '../../localization/LocalizationProvider';
import { Menu, Icon, Layout } from 'antd';
import './Layout.sass';
import '../../styles/Utilities.sass';
import { LocalizationContext } from '../../localization/LocalizationProvider';
const { Header } = Layout;
const Navbar = props => {
    const auth = useContext(AuthContext);
    const local = useContext(LocalizationContext);
    const lang = local.lang === 'gr' ? 'GR' : "EN";
    return (
        <Header className="header">
            <Menu mode="horizontal" className="menu" selectable={false}>                
                <Menu.Item key="99" className="menu-item is-right" onClick={auth.signOut}>
                    <Icon type="logout" />{strings.logout}
                </Menu.Item>
                <Menu.SubMenu className="is-right menu-item"
                    title={<span className=""><Icon type="global" />{lang}</span>}>
                    <Menu.Item key="setting:1" onClick={() => local.changeLocalization('gr')}>Ελληνικά</Menu.Item>
                    <Menu.Item key="setting:2" onClick={() => local.changeLocalization('en')}>Αγγλικα</Menu.Item>
                </Menu.SubMenu>

            </Menu>
        </Header>

    );
};

export default Navbar;