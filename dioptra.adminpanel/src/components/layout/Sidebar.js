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
      icon: 'home',
      caption: 'Dashboard'
    },
    {
      path: '/server/new',
      icon: 'home',
      caption: 'Server'
    },
    {
      path: '/servers',
      icon: 'home',
      caption: 'Servers'
    }
  ]

  return (
    <Menu mode="inline">
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
