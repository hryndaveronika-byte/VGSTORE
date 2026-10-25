import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import styles from './LoginPage.module.css'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, user, loading, error } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(username, password)
  }

  return (
    <main className={styles.page}>
      <div className={styles.formBox}>
        <p className={styles.small}>WELCOME BACK</p>

        <h1>Sign in to VG STORE</h1>

        <p className={styles.subtitle}>
          Enter your details to continue shopping.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className={styles.forgot}>
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN →'}
          </button>

          {error && <p>{error}</p>}

          {user && <p>Welcome, {user.firstName}!</p>}
        </form>

        <p className={styles.register}>
          Don't have an account? <span>Create account</span>
        </p>
      </div>
    </main>
  )
}

export default LoginPage
