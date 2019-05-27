import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Layout as AntdLayout,
  Menu as AntdMenu,
  Icon as AntdIcon,
  Avatar as AntdAvatar
} from 'antd'

import { useAuth } from '../../contexts/AuthProvider'

const items = [
  {
    path: '/map',
    icon: 'global',
    caption: 'Χάρτης'
  },
  {
    path: '/logbooks',
    icon: 'notification',
    caption: 'Συμβάντα'
  },
  {
    path: '/admin/users',
    icon: 'team',
    caption: 'Διαχείριση Χρηστών'
  },
  {
    path: '/admin/sites',
    icon: 'file-protect',
    caption: 'Διαχείριση Ιστοσελίδων'
  }
]
const Sidebar = () => {
  const auth = useAuth()
  return (
    <AntdLayout.Sider collapsed={true}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AntdMenu selectable={false} mode="vertical" className="sidebar-menu">
          {items.map(item => (
            <AntdMenu.Item key={item.path} className="sidebar-menu-item">
              <NavLink to={item.path}>
                <AntdIcon type={item.icon} />
                <span>{item.caption}</span>
              </NavLink>
            </AntdMenu.Item>
          ))}
        </AntdMenu>
        <div style={{ flexGrow: '1' }} />
        <AntdMenu
          selectable={false}
          mode="vertical"
          style={{ backgroundColor: 'unset' }}
          className="sidebar-menu">
          <AntdMenu.Item
            key="/logout"
            onClick={auth.signOut}
            style={{ justifySelf: 'flex-end' }}
            className="sidebar-logout">
            <span>
              <AntdIcon type="logout" />
              <span>Αποσύνδεση</span>
            </span>
          </AntdMenu.Item>
        </AntdMenu>
      </div>
    </AntdLayout.Sider>
  )
}

export default Sidebar
