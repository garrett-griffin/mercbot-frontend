export type User = {
	id: number
	email?: string
	username: string
	password?: string
	firstName?: string
	lastName?: string
	role?: string
	token?: string
	message?: string
}

export type AuthContextType = {
	user: User | boolean
	isAuthenticated: boolean
	saveSession: (session: User) => void
	removeSession: () => void
}
