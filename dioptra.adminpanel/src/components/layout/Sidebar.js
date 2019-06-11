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

    ]

    return (
        <Menu
            mode="inline"
            inlineCollapsed={open}
        >
            {items.map(item =>
                <Menu.Item key={item.path}>
                    <NavLink to={item.path}>
                        <Icon type={item.icon} />
                        <span>{item.caption}</span>
                    </NavLink>
                </Menu.Item>
            )}
        </Menu>
    )
}

export default Sidebar
