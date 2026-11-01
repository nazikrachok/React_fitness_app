import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api/axios'

export const useAuth = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	const login = async (email: string, password: string) => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await api.post('/auth/login', { email, password })

			const token = response.data.token
			localStorage.setItem('token', token)

			navigate('/home')
		} catch (err) {
			console.warn('Backend not connected. Using fake login for demonstration.')
			localStorage.setItem('token', 'fake-jwt-token-123')
			navigate('/home')

			// setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
		} finally {
			setIsLoading(false)
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		navigate('/')
	}

	return { login, logout, isLoading, error }
}
