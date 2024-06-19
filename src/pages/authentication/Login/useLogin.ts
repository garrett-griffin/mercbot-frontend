// src/pages/authentication/Login/useLogin.ts
import { useAuthContext } from '@/context/useAuthContext'
import type { User } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import * as yup from 'yup'

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const { isAuthenticated, saveSession } = useAuthContext()

	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Please enter Username'),
		password: yup.string().required('Please enter Password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	type LoginFormFields = yup.InferType<typeof schemaResolver>

	const redirectUrl = searchParams.get('next') ?? '/dashboards/analytics'

	const login = handleSubmit(async function (values: LoginFormFields) {
		setLoading(true)
		try {
			const res = await axios.post<User>(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, values)
			if (res.data.token) {
				saveSession({
					...(res.data ?? {}),
					token: res.data.token,
				})
				toast.success('Successfully logged in. Redirecting....', {
					position: 'top-right',
					duration: 2000,
				})
				navigate(redirectUrl, { replace: true })
			}
		} catch (e: any) {
			if (e.response?.data?.error) {
				toast.error(e.response?.data?.error, {
					position: 'top-right',
					duration: 2000,
				})
			}
		} finally {
			setLoading(false)
		}
	})

	return { loading, login, redirectUrl, isAuthenticated, control }
}
