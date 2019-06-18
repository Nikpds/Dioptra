import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Avatar } from 'antd'

const Sidebar = ({ open }) => {
  const items = [
    {
      path: '/home',
      icon: 'home',
      caption: 'home'
    },
    {
      path: '/dashboard',
      icon: 'dashboard',
      caption: 'Dashboard'
    },
    {
      path: '/server/new',
      icon: 'database',
      caption: 'Server'
    },
    {
      path: '/servers',
      icon: 'database',
      caption: 'Servers'
    },
    {
      path: '/user/new',
      icon: 'user',
      caption: 'User'
    },
    {
      path: '/users',
      icon: 'team',
      caption: 'Users'
    }
  ]

  return (
    <Menu mode="inline" selectable={false}>
      {items.map(item => (
        <Menu.Item key={item.path}>
          <NavLink to={item.path}>
            <Icon type={item.icon} />
            <span>{item.caption}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Sidebar
