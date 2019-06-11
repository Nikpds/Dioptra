import React, { useContext } from 'react'
import { PageHeader, Icon, Dropdown, Menu, Divider } from 'antd'
import { NavLink } from 'react-router-dom'
import {
  strings,
  LocalizationContext
} from '../../contexts/LocalizationProvider'
import { useAuth } from '../../contexts/AuthProvider'
import storage from '../../services/storage'

const Navbar = ({ open, setOpen }) => {
  const user = storage.get('auth')
  const auth = useAuth()
  const local = useContext(LocalizationContext)
  const langMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => local.changeLocalization('en')}>
        {strings.en}
      </Menu.Item>
      <Menu.Item key="2" onClick={() => local.changeLocalization('gr')}>
        {strings.gr}
      </Menu.Item>
    </Menu>
  )
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/versions">
          <span>{strings.navbar.versions}</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/change-password">
          <span>{strings.navbar.changepassword}</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/about">
          <span>{strings.navbar.about}</span>
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" onClick={auth.signOut}>
        <Icon type="logout" />
        <span>{strings.sidebar.logout}</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <PageHeader
      onBack={() => setOpen(!open)}
      title={strings.app}
      backIcon={
        open ? (
          <Icon type="arrow-right" style={{ fontSize: 17 }} />
        ) : (
          <Icon style={{ fontSize: 17 }} type="arrow-left" />
        )
      }
      subTitle={user.name}
      extra={[
        <Dropdown overlay={langMenu} key="0">
          <Icon type="global" style={{ fontSize: 20, marginRight: 20 }} />
        </Dropdown>,
        <Dropdown overlay={menu} key="1">
          <Icon type="question-circle" style={{ fontSize: 21 }} />
        </Dropdown>
      ]}
    />
  )
}

export default Navbar
