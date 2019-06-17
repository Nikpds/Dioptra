import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
import './layout.less'

const Sidebar = ({ open, setOpen }) => {
  const items = [
    {
      path: '/home',
      icon: 'home',
      hasSubMenu: false,
      caption: strings.sidebar.home
    },
    {
      path: '/managment',
      icon: 'control',
      hasSubMenu: true,
      caption: strings.sidebar.managment,
      submenu: [
        {
          path: '/user/new',
          icon: 'user',
          caption: strings.sidebar.user
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
    <Menu mode="inline" inlineCollapsed={open} selectable={false}>
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
                <Icon type={item.icon} />
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
      <Menu.Item
        key="bottom"
        className="bottom-arrow"
        onClick={() => setOpen(!open)}>
        {open ? <Icon type="arrow-right" /> : <Icon type="arrow-left" />}
        <span>{strings.sidebar.minimize}</span>
      </Menu.Item>
    </Menu>
  )
}

export default Sidebar
