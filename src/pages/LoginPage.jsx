import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import styles from './LoginPage.module.css'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { user, login, logout, loading, error } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const result = await login(username, password)

    if (result) {
      setPassword('')
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.formBox}>
        <p className={styles.small}>WELCOME BACK</p>

        <h1>Sign in to VG STORE</h1>

        <p className={styles.subtitle}>
          Enter your details to continue shopping.
        </p>

        {loading && <p role="status">Please wait...</p>}

        {error && <p role="alert">{error}</p>}

        {user ? (
          <div>
            <p role="status">Welcome, {user.firstName || user.username}!</p>

            <button
              type="button"
              className={styles.loginButton}
              onClick={logout}
              disabled={loading}
            >
              SIGN OUT →
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>

            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              maxLength={32}
              required
              disabled={loading}
            />

            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxLength={128}
              required
              disabled={loading}
            />

            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? 'PLEASE WAIT...' : 'SIGN IN →'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

export default LoginPage
