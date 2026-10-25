import styles from './LoginPage.module.css'

function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.formBox}>
        <p className={styles.small}>WELCOME BACK</p>

        <h1>Sign in to VG STORE</h1>

        <p className={styles.subtitle}>
          Enter your details to continue shopping.
        </p>

        <form className={styles.form}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className={styles.forgot}>
              Forgot password?
            </button>
          </div>

          <button type="button" className={styles.loginButton}>
            SIGN IN →
          </button>
        </form>

        <p className={styles.register}>
          Don't have an account? <span>Create account</span>
        </p>
      </div>
    </main>
  )
}

export default LoginPage
