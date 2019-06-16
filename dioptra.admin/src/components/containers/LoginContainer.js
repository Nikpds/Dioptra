import React from 'react'
import Login from '../Login'
import { useAuth } from 'mis-react'
import { api } from 'mis-react'
const LoginContainer = () => {
  const auth = useAuth()

  async function handleSubmit(username, password) {
    const response = await api.post('/api/token', { username, password })
    if (response && response.token) {
      console.log(response.token)
      auth.signIn(response.token)
    }
  }

  return (
    <div style={{ color: 'black' }}>
      <Login login={handleSubmit} />
    </div>
  )
}

export default LoginContainer
