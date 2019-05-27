import React, { Suspense, useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import Sidebar from './Sidebar'
import { useAuth } from '../../contexts/AuthProvider'
import Navbar from './Navbar'
const Layout = props => {
  const [open, setOpen] = useState(false)
  const auth = useAuth()
  const toolbar = auth.isAuthenticated ? (
    <Navbar setOpen={setOpen} open={open} />
  ) : null
  const sidebar = auth.isAuthenticated ? <Sidebar open={open} /> : null
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AntdLayout>
        {sidebar}
        <AntdLayout.Content style={{ height: '100vh' }}>
          <AntdLayout>{toolbar}</AntdLayout>
          <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
        </AntdLayout.Content>
      </AntdLayout>
    </div>
  )
}

export default Layout
