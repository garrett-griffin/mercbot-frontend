// src/common/api/auth.ts
import axios from 'axios'

const HttpClient = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,  // Update with your backend URL
})

export const login = async (email: string, password: string) => {
	const response = await HttpClient.post('/login', { email, password })
	return response.data
}

export const register = async (email: string, password: string) => {
	const response = await HttpClient.post('/register', { email, password })
	return response.data
}
