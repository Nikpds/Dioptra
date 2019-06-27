import { strings } from '../../../contexts/LocalizationProvider'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import React from 'react'
import '../layout.less'

const SidebarMenu = ({ items, open, setOpen }) => (
  <Menu mode="vertical" inlineCollapsed={open} selectable={false}>
    {items.map(item =>
      item.hasSubMenu ? (
        <Menu.SubMenu
          key={item.path}
          title={
            <span>
              <Icon type={item.icon} />
              <span> {item.caption}</span>
            </span>
          }>
          {item.submenu.map(subItem =>
            subItem.hasSubMenu ? (
              <Menu.SubMenu
                key={subItem.path}
                title={
                  <span>
                    <Icon type={subItem.icon} />
                    <span> {subItem.caption}</span>
                  </span>
                }>
                {subItem.submenu.map(lastItem =>
                  lastItem.hasSubMenu ? null : (
                    <Menu.Item key={lastItem.path}>
                      <NavLink to={lastItem.path}>
                        <Icon type={lastItem.icon} />
                        <span>{lastItem.caption}</span>
                      </NavLink>
                    </Menu.Item>
                  )
                )}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={subItem.path}>
                <NavLink to={subItem.path}>
                  <Icon type={subItem.icon} />
                  <span>{subItem.caption}</span>
                </NavLink>
              </Menu.Item>
            )
          )}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.path}>
          <NavLink to={item.path}>
            <Icon type={item.icon} />
            <span>{item.caption}</span>
          </NavLink>
        </Menu.Item>
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

export default SidebarMenu
