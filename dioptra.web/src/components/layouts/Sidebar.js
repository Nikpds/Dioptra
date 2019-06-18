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
          icon: 'user-add',
          caption: strings.sidebar.user
        },
        {
          path: '/users',
          icon: 'usergroup-add',
          caption: strings.sidebar.users
        }
      ]
    },
    {
      path: '/eob',
      icon: 'global',
      hasSubMenu: false,
      caption: strings.sidebar.eob
    },
    {
      path: '/unitmission/new',
      icon: 'thunderbolt',
      hasSubMenu: false,
      caption: strings.sidebar.unitMission
    },
    {
      path: '/jrfltype/new',
      icon: 'dot-chart',
      hasSubMenu: false,
      caption: strings.sidebar.jrfl
    },
    /*
    {
      path: '/jrfl',
      icon: 'dot-chart',
      hasSubMenu: true,
      caption: strings.sidebar.jrfl,
      submenu: [
        {
          path: '/jrfltype/new',
          icon: 'dot-chart',
          caption: strings.sidebar.jrfl
        },
        {
          path: '/jrfltype/as',
          icon: 'dot-chart',
          caption: strings.sidebar.jrfl
        }
      ]
    }*/
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
