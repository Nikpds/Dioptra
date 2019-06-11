import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Avatar, Divider } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'

import logo from '../../assets/ThalesLogo.png'
import minlogo from '../../assets/logo.png'
import './layout.less'

const Sidebar = ({ open }) => {
  const items = [
    {
      path: '/home',
      icon: 'home',
      hasSubMenu: false,
      caption: strings.sidebar.home
    },
    {
      path: '/managment',
      icon: 'plus',
      hasSubMenu: true,
      caption: strings.sidebar.managment,
      submenu: [
        {
          path: '/users',
          icon: 'user',
          caption: strings.sidebar.users
        }
      ]
    },
    {
      path: '/eob',
      icon: 'global',
      hasSubMenu: false,
      caption: strings.sidebar.eob
    }
  ]

  return (
    <Menu
      mode="inline"
      inlineCollapsed={open}
    >
      {!open ? (
        <Menu.Item>
          <Avatar
            size={96}
            src={logo}
            shape="square"
            alt="Thales"
            style={{ margin: '20px auto 0' }}
          />
        </Menu.Item>
      ) : (
          <Menu.Item>
            <img
              height="28"
              src={minlogo}
              alt="Thales"
              style={{ margin: '10px auto 0' }}
            />

          </Menu.Item>)}

      {items.map(item =>
        !item.hasSubMenu ? (
          <Menu.Item key={item.path}>
            <NavLink to={item.path}>
              <Icon type={item.icon} />
              <span>{item.caption}</span>
            </NavLink>
          </Menu.Item>
        ) : (
            <Menu.SubMenu
              key={item.path}
              title={
                <span>
                  <Icon type="mail" />
                  <span> {item.caption}</span>
                </span>
              }>
              {item.submenu.map(subItem => (
                <Menu.Item key={subItem.path}>
                  <NavLink to={subItem.path}>
                    <Icon type={subItem.icon} />
                    <span>{subItem.caption}</span>
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )
      )}
    </Menu>
  )
}

export default Sidebar
