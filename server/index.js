import process from 'node:process'
import express from 'express'
import bcrypt from 'bcryptjs'
import session from 'express-session'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import { randomBytes } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { products } from './products.js'

const app = express()
const PORT = 3001

// This configuration is for local laboratory development.
if (process.env.NODE_ENV === 'production') {
  throw new Error(
    'Configure HTTPS and a persistent session store before production use',
  )
}

const userFile = new URL('./data/user.json', import.meta.url)
const user = JSON.parse(await readFile(userFile, 'utf8'))

// Used to check nonexistent users without skipping password comparison.
const dummyHash = await bcrypt.hash(randomBytes(32).toString('hex'), 12)

app.disable('x-powered-by')
app.use(helmet())
app.use(express.json({ limit: '4kb' }))

app.use(
  session({
    name: 'vg.sid',
    secret: randomBytes(48).toString('hex'),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      maxAge: 30 * 60 * 1000,
    },
  }),
)

// Protect authentication POST requests from other websites.
app.use('/api/auth', (req, res, next) => {
  res.set('Cache-Control', 'no-store')

  if (req.method === 'POST') {
    const origin = req.get('Origin')

    if (
      req.get('X-VG-Request') !== '1' ||
      !req.is('application/json') ||
      (origin && origin !== 'http://localhost:5173')
    ) {
      return res.status(403).json({
        message: 'Запит відхилено',
      })
    }
  }

  next()
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/products', (req, res) => {
  res.json({ products })
})

app.get('/api/products/:id', (req, res) => {
  if (!/^[1-9]\d*$/.test(req.params.id)) {
    return res.status(400).json({
      message: 'Некоректний ID товару',
    })
  }

  const product = products.find((item) => item.id === Number(req.params.id))

  if (!product) {
    return res.status(404).json({
      message: 'Товар не знайдено',
    })
  }

  res.json(product)
})

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Забагато спроб входу. Спробуйте через 15 хвилин.',
  },
})

app.post('/api/auth/login', loginLimiter, async (req, res, next) => {
  try {
    const { username, password } = req.body ?? {}

    if (
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      username.length < 1 ||
      username.length > 32 ||
      password.length < 1 ||
      password.length > 128
    ) {
      return res.status(400).json({
        message: 'Введіть коректні ім’я користувача та пароль',
      })
    }

    const usernameMatches = username === user.username

    const passwordMatches = await bcrypt.compare(
      password,
      usernameMatches ? user.passwordHash : dummyHash,
    )

    if (!usernameMatches || !passwordMatches) {
      return res.status(401).json({
        message: 'Неправильне ім’я користувача або пароль',
      })
    }

    // Create a new session ID after successful login.
    req.session.regenerate((error) => {
      if (error) return next(error)

      req.session.user = {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
      }

      req.session.save((error) => {
        if (error) return next(error)

        res.json({ user: req.session.user })
      })
    })
  } catch (error) {
    next(error)
  }
})

app.get('/api/auth/me', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: 'Спочатку увійдіть до облікового запису',
    })
  }

  res.json({ user: req.session.user })
})

app.post('/api/auth/logout', (req, res, next) => {
  req.session.destroy((error) => {
    if (error) return next(error)

    res.clearCookie('vg.sid', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
    })

    res.status(204).end()
  })
})

app.use('/api', (req, res) => {
  res.status(404).json({
    message: 'Маршрут не знайдено',
  })
})

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error)

  const status =
    error.status === 400 || error.status === 413 ? error.status : 500

  res.status(status).json({
    message: status === 500 ? 'Помилка сервера' : 'Некоректне тіло запиту',
  })
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`VG STORE API: http://localhost:${PORT}`)
})
