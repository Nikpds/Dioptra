import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import { fullAccess, unAuthorized } from './services/Routes'
import { useAuth } from './contexts/AuthProvider'
const App = () => {

  const auth = useAuth()
  const routes = auth.isAuthenticated ? fullAccess : unAuthorized

  return <Layout>{routes}</Layout>
}

export default App;
