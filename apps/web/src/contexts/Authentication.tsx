import * as React from 'react'

type User = {
  email: string
  id: number
  name: string
  token: string
}

type State = {
  user: User | null
  setUser: React.Dispatch<any>
}

const AuthContext = React.createContext<State | undefined>(undefined)

function AuthProvider(props: any) {
  const [user, setUser] = React.useState<any>(() => {
    const userFromLocalStorage = window.localStorage.getItem(
      '__babytwitter_user__',
    )
    if (!userFromLocalStorage) return null
    return JSON.parse(userFromLocalStorage)
  })

  const value = { user, setUser }

  return <AuthContext.Provider value={value} {...props} />
}

function useUser() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useUser hook must be used within AuthProvider')
  }

  return context
}

export { AuthProvider, useUser }
