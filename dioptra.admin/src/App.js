import React from 'react';
import Layout from './components/layout/Layout'
import { fullAccess, unAuthorized } from './services/Routes'
import { useAuth } from 'mis-react'
const App = () => {

  const auth = useAuth()
  const routes = auth.isAuthenticated ? fullAccess : unAuthorized

  return <Layout>{routes}</Layout>
}

export default App;
