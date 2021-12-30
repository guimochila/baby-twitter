const localStorageKey = '__babytwitter_user__'

interface Headers {
  'Content-Type': string
  Authorization?: string
}

function client(endpoint: string, { body, ...customConfig }: RequestInit = {}) {
  const user = window.localStorage.getItem(localStorageKey)
  let token
  if (user) {
    token = JSON.parse(user).token
  }

  const headers: Headers = {
    'Content-Type': 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    body,
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/api/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        return await response.json()
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}

export { client }
