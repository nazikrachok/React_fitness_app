import { useState, useEffect } from 'react'
import { api } from '../api/axios'

interface DashboardData {
	caloriesIntake: number
	caloriesGoal: number
	waterLiters: number
	proteinGrams: number
	workoutMinutes: number
	aiAdvice: string
}

export const useDashboard = () => {
	const [data, setData] = useState<DashboardData | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchDashboardData = async () => {
			try {
				const response = await api.get('/dashboard/today')
				setData(response.data)
			} catch (err) {
				setError('Backend not connected, using mock data')
				setData({
					caloriesIntake: 1230,
					caloriesGoal: 2100,
					waterLiters: 1.8,
					proteinGrams: 145,
					workoutMinutes: 45,
					aiAdvice:
						'Today try to get the most of your protein goal by dairy products...'
				})
			} finally {
				setIsLoading(false)
			}
		}

		fetchDashboardData()
	}, [])

	return { data, isLoading, error }
}
