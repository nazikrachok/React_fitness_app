import { useState, useEffect } from 'react'
import { api } from '../api/axios'

interface Exercise {
	name: string
	reps: string
}

interface WorkoutPlan {
	type: string
	duration: number
	exercises: Exercise[]
	aiTip: string
}

export const useTrainer = () => {
	const [workout, setWorkout] = useState<WorkoutPlan | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchWorkout = async () => {
			try {
				const response = await api.get('/trainer/today')
				setWorkout(response.data)
			} catch (error) {
				setWorkout({
					type: 'Upper body',
					duration: 45,
					exercises: [
						{ name: 'Bench press', reps: '4 x 8' },
						{ name: 'Pull ups', reps: '3 x 10' },
						{ name: 'Shoulder press', reps: '3 x 10' }
					],
					aiTip:
						'You trained chest recently. Today focus on back and shoulders.'
				})
			} finally {
				setIsLoading(false)
			}
		}

		fetchWorkout()
	}, [])

	return { workout, isLoading }
}
