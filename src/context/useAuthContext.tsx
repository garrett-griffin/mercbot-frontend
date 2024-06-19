import { AuthContextType, User } from '@/types'
import {deleteCookie, getCookie, hasCookie, setCookie} from 'cookies-next'
import {createContext, useContext, useState, ReactNode, useEffect} from 'react'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuthContext must be used within an AuthProvider')
	}
	return context
}

const authSessionKey = '_MERCBOT_AUTH'

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | boolean>(false as boolean)



	const saveSession = (user: User) => {
		setCookie(authSessionKey, JSON.stringify(user))
		setUser(user)
	}

	const removeSession = () => {
		deleteCookie(authSessionKey)
		setUser(false)
	}

	const loadSession = () => {
		const storedUser = hasCookie(authSessionKey) && JSON.parse(getCookie(authSessionKey) as string)
		if (storedUser) {
			setUser(storedUser)
		}
	}

	// Call loadSession when the component mounts
	useEffect(() => {
		loadSession()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: hasCookie(authSessionKey),
				saveSession,
				removeSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
