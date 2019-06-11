import React, { Suspense, useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import Sidebar from './Sidebar'
import { useAuth } from '../../contexts/AuthProvider'
import Navbar from './Navbar'
const Layout = props => {
  const [open, setOpen] = useState(false)
  const auth = useAuth()
  const navbar = auth.isAuthenticated ? (
    <Navbar setOpen={setOpen} open={open} />
  ) : null
  const sidebar = auth.isAuthenticated ? (
    <AntdLayout.Sider>
      <Sidebar open={open} />
    </AntdLayout.Sider>
  ) : null
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AntdLayout>
        {sidebar}
        <AntdLayout>
          <AntdLayout.Content style={{ height: '100vh' }}>
            {navbar}
            <Suspense fallback={<div>Loading...</div>}>
              {props.children}
            </Suspense>
          </AntdLayout.Content>
        </AntdLayout>
      </AntdLayout>
    </div>
  )
}

export default Layout
