import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { FiMessageSquare, FiPlay, FiInfo } from 'react-icons/fi'
import { useTrainer } from '../../hooks/useTrainer'
import styles from './FitnessTrainer.module.css'

export const FitnessTrainer: React.FC = () => {
	const { workout, isLoading } = useTrainer()

	if (isLoading || !workout) {
		return (
			<PageLayout>
				<div className={styles.header}>
					<h1 className={styles.title}>Loading your AI workout...</h1>
				</div>
			</PageLayout>
		)
	}

	return (
		<PageLayout>
			<div className={styles.header}>
				<h1 className={styles.title}>AI fitness trainer</h1>
			</div>

			<div className={styles.grid}>
				<div className={styles.leftColumn}>
					<h2 className={styles.subtitle}>AI trainer</h2>
					<p className={styles.description}>
						Based on your goals and previous activity, here’s your recommended
						workout
					</p>

					<div className={styles.chatBox}>
						<FiMessageSquare className={styles.chatIcon} />
						<input
							type='text'
							placeholder='Ask AI about your workout...'
							className={styles.chatInput}
						/>
					</div>
				</div>

				<div className={styles.rightColumn}>
					<div className={styles.workoutCard}>
						<h3 className={styles.cardTitle}>Today’s workout</h3>
						<h4 className={styles.workoutType}>{workout.type}</h4>

						<ul className={styles.exerciseList}>
							{workout.exercises.map((exercise, index) => (
								<li key={index}>
									<span className={styles.exerciseName}>{exercise.name}</span>
									<span className={styles.exerciseReps}>{exercise.reps}</span>
								</li>
							))}
						</ul>

						<div className={styles.duration}>
							Duration: {workout.duration} min
						</div>

						<button className={styles.startBtn}>
							<FiPlay /> Start workout
						</button>
					</div>

					<div className={styles.recommendationCard}>
						<h3 className={styles.recommendationTitle}>
							<FiInfo /> AI recommendation:
						</h3>
						<p className={styles.recommendationText}>{workout.aiTip}</p>
					</div>
				</div>
			</div>
		</PageLayout>
	)
}
