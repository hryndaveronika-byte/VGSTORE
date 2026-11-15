import bcrypt from 'bcryptjs'
import { mkdir, writeFile } from 'node:fs/promises'
import { createInterface } from 'node:readline/promises'
import process, { stdin, stdout } from 'node:process'

const input = createInterface({ input: stdin, output: stdout })

try {
  const username = (
    await input.question('Username (3-32 letters or digits): ')
  ).trim()

  if (!/^[a-zA-Z0-9_-]{3,32}$/.test(username)) {
    throw new Error('Username must contain 3-32 letters, digits, _ or -')
  }

  console.log('Use a new local test password, not your real account password.')
  console.log('The password will be visible while typing.')

  const password = await input.question('Password (12-128 characters): ')

  if (password.length < 12 || password.length > 128) {
    throw new Error('Password must contain 12-128 characters')
  }

  const passwordHash = await bcrypt.hash(password, 12)

  const directory = new URL('./data/', import.meta.url)
  const file = new URL('./data/user.json', import.meta.url)

  await mkdir(directory, { recursive: true })

  await writeFile(
    file,
    JSON.stringify(
      {
        id: 1,
        username,
        firstName: username,
        passwordHash,
      },
      null,
      2,
    ),
    { flag: 'wx' },
  )

  console.log('User created successfully.')
} catch (error) {
  console.error(
    error.code === 'EEXIST'
      ? 'User already exists. Existing data was not changed.'
      : error.message,
  )

  process.exitCode = 1
} finally {
  input.close()
}
