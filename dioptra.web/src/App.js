import React, {  } from 'react'
import Layout from './components/layouts/Layout'
import { fullAccess, unAuthorized } from './services/routes'
import { useAuth } from './contexts/AuthProvider'

const App = () => {
  const auth = useAuth()
  const routes = auth.isAuthenticated ? fullAccess : unAuthorized

  return <Layout>{routes}</Layout>
}

export default App
