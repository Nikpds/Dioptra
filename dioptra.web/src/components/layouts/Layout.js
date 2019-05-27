import React, { Suspense } from 'react'
import { Layout as AntdLayout } from 'antd'
import Sidebar from './Sidebar'
import { useAuth } from '../../contexts/AuthProvider'
//import Navbar from './navbar/Navbar'

const Layout = props => {
  const auth = useAuth()
  //const toolbar = auth.isAuthenticated ? <Navbar /> : null
  const sidebar = auth.isAuthenticated ? <Sidebar /> : null
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {/* <AntdLayout>{toolbar}</AntdLayout> */}
      <AntdLayout>
        {sidebar}
        <AntdLayout.Content style={{ height: '100vh' }}>
          <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
        </AntdLayout.Content>
      </AntdLayout>
    </div>
  )
}

export default Layout
