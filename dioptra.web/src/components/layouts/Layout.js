import React, { Suspense, useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import Sidebar from './Sidebar'
import { useAuth } from '../../contexts/AuthProvider'
import Navbar from './Navbar'
const Layout = props => {
  const [open, setOpen] = useState(false)
  const auth = useAuth()
  const navbar = auth.isAuthenticated ? <Navbar /> : null
  const sidebar = auth.isAuthenticated ? (
    <AntdLayout.Sider collapsed={open}>
      <Sidebar open={open} setOpen={setOpen} />
    </AntdLayout.Sider>
  ) : null
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AntdLayout>
        {navbar}
        <AntdLayout>
          {sidebar}
          <AntdLayout>
            <AntdLayout.Content style={{ height: 'calc(100vh - 60px)' }}>
              <Suspense fallback={<div>Loading...</div>}>
                {props.children}
              </Suspense>
            </AntdLayout.Content>
          </AntdLayout>
        </AntdLayout>
      </AntdLayout>
    </div>
  )
}

export default Layout
