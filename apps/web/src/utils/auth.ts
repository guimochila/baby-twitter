import { client } from './api-client'

async function login(email: string, password: string) {
  // @ts-ignore
  const user = await client('auth', { body: { email, password } })

  try {
    window.localStorage.setItem('__babytwitter_user__', JSON.stringify(user))
  } catch (error) {
    console.error(error)
  }

  return user
}

export { login }
