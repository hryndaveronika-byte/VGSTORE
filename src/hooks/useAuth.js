import { useEffect, useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Відновлення авторизації після оновлення сторінки
  useEffect(() => {
    const controller = new AbortController()

    // Видаляємо старі дані авторизації через DummyJSON
    localStorage.removeItem('user')

    async function checkSession() {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'same-origin',
          signal: controller.signal,
        })

        if (response.status === 401) {
          setUser(null)
          return
        }

        if (!response.ok) {
          throw new Error('Не вдалося перевірити сесію')
        }

        const data = await response.json()
        setUser(data.user ?? data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    checkSession()

    return () => controller.abort()
  }, [])

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-VG-Request': '1',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Не вдалося увійти')
      }

      const currentUser = data.user ?? data
      setUser(currentUser)

      return currentUser
    } catch (error) {
      setError(error.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-VG-Request': '1',
        },
        body: JSON.stringify({}),
      })

      if (!response.ok) {
        throw new Error('Не вдалося вийти')
      }

      setUser(null)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { user, login, logout, loading, error }
}
