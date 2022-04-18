import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react'

interface ContextTypes {
  user: UserTypes
  loading: boolean
  login?: (value: { email: string; password: string }) => void
  logout?: () => void
}

export const UserContext = createContext<ContextTypes>({})

interface UserProviderTypes {
  children: ReactNode
}

interface LoginTypes {
  email: string
  password: string
}

interface UserTypes {
  email: string
  password: string
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()

  const login = ({ email, password }) => {
    setUser({ email, password })
  }

  const logout = () => {
    setUser(undefined)
  }

  return (
    <UserContext.Provider
      valuer={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
