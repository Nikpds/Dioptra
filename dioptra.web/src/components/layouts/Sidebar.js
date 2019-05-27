import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, Avatar } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
import { useAuth } from '../../contexts/AuthProvider'
import logo from '../../assets/ThalesLogo.png'
import minlogo from '../../assets/logo.png'
import storage from '../../services/storage'
const items = [
  {
    path: '/map',
    icon: 'global',
    caption: strings.sidebar.eob
  }
]
const Sidebar = ({ open }) => {
  const user = storage.get('auth')
  const auth = useAuth()
  return (
    <Layout.Sider collapsed={open}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {!open ? (
          <Avatar
            size={96}
            src={logo}
            shape="square"
            alt="Thales"
            style={{ margin: '20px auto' }}           
          />
        ) : (
          <img
            height="28"
            src={minlogo}
            alt="Thales"
            style={{ margin: '10px auto' }}           
          />
        )}
        <Menu selectable={false} mode="vertical">
          <Menu.Item key="0">
            {open ? <Icon type="user" /> : null}
            <span>{user.name}</span>
          </Menu.Item>
          {items.map(item => (
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>
                <Icon type={item.icon} />
                <span>{item.caption}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ flexGrow: '1' }} />
        <Menu selectable={false} mode="vertical">
          <Menu.Item
            key="/logout"
            onClick={auth.signOut}
            style={{ justifySelf: 'flex-end' }}>
            <span>
              <Icon type="logout" />
              <span>Αποσύνδεση</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Sider>
  )
}

export default Sidebar
