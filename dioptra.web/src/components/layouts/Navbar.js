import React from 'react'
import { PageHeader, Icon } from 'antd'
import { string } from '../../contexts/LocalizationProvider'
const Navbar = ({ open, setOpen }) => {
  return (
    <PageHeader
      onBack={() => setOpen(!open)}
      title="Title"
      backIcon={open ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />}
      subTitle="This is a subtitle"
    />
  )
}

export default Navbar
