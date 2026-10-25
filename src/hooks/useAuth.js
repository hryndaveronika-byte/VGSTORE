import { useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      })

      if (!response.ok) {
        throw new Error('Incorrect username or password')
      }

      const data = await response.json()

      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))

      return data
    } catch (error) {
      setError(error.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return {
    user,
    login,
    logout,
    loading,
    error,
  }
}
