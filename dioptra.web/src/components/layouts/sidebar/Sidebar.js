import React from 'react'
import { strings } from '../../../contexts/LocalizationProvider'
import SidebarMenu from './SidebarMenu'

const Sidebar = ({ open, setOpen }) => {
  const items = [
    {
      path: '/home',
      icon: 'home',
      hasSubMenu: false,
      caption: strings.sidebar.home
    },
    {
      path: strings.sidebar.managment,
      icon: 'folder',
      hasSubMenu: true,
      caption: strings.sidebar.managment,
      submenu: [
        {
          path: '/user/new',
          icon: 'user-add',
          hasSubMenu: false,
          caption: strings.sidebar.user
        },
        {
          path: '/users/1/10',
          icon: 'usergroup-add',
          hasSubMenu: false,
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
      path: strings.sidebar.tables,
      icon: 'folder',
      hasSubMenu: true,
      caption: strings.sidebar.tables,
      submenu: [
        {
          path: strings.sidebar.Units,
          icon: 'folder',
          caption: strings.sidebar.Units,
          hasSubMenu: true,
          submenu: [
            {
              path: '/unitmissions',
              icon: 'table',
              caption: strings.sidebar.unitMission,
              hasSubMenu: false
            },
            {
              path: '/unittypes',
              icon: 'table',
              caption: strings.sidebar.unitType,
              hasSubMenu: false
            }
          ]
        }
      ]
    },
    {
      
    },
    {
      path: strings.sidebar.jrfl,
      icon: 'folder',
      hasSubMenu: true,
      caption: strings.sidebar.jrfl,
      submenu: [
        {
          path: '/jrfltypes',
          hasSubMenu: false,
          icon: 'table',
          caption: strings.sidebar.jrfltypes
        }
      ]
    },
    {
      path: '/nationalities',
      icon: 'global',
      caption: strings.sidebar.manageNationality,
      hasSubMenu: false
    }
  ]

  return <SidebarMenu items={items} open={open} setOpen={setOpen} />
}

export default Sidebar
