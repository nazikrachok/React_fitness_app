import { useState } from 'react'
import { api } from '../api/axios'

interface FoodAnalysisResult {
	name: string
	calories: number
	protein: number
	carbs: number
	fat: number
	portion: number
}

export const useFoodAnalysis = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [result, setResult] = useState<FoodAnalysisResult | null>(null)

	const analyzeFood = async (file: File) => {
		setIsLoading(true)
		const formData = new FormData()
		formData.append('image', file)

		try {
			const response = await api.post('/food/analyze', formData, {
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			setResult(response.data)
		} catch (error) {
			console.warn('Backend not connected. Using fake AI analysis.')
			setResult({
				name: 'Chicken with rice',
				calories: 630,
				protein: 45,
				carbs: 63,
				fat: 15,
				portion: 350
			})
		} finally {
			setIsLoading(false)
		}
	}

	return { analyzeFood, isLoading, result }
}
