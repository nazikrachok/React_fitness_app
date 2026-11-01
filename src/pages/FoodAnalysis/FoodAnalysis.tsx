import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { FiCamera } from 'react-icons/fi'
import { useFoodAnalysis } from '../../hooks/useFoodAnalysis'
import styles from './FoodAnalysis.module.css'

export const FoodAnalysis: React.FC = () => {
	const { analyzeFood, isLoading, result } = useFoodAnalysis()

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			analyzeFood(e.target.files[0])
		}
	}

	return (
		<PageLayout>
			<div className={styles.header}>
				<h1 className={styles.title}>Calories</h1>
				<h2 className={styles.subtitle}>Analyze your meal using AI</h2>
			</div>

			<div className={styles.content}>
				<div className={styles.uploadArea}>
					<input
						type='file'
						id='file-upload'
						className={styles.fileInput}
						onChange={handleFileChange}
						accept='image/*'
					/>
					<label htmlFor='file-upload' className={styles.uploadLabel}>
						<FiCamera className={styles.cameraIcon} />
						<span>
							{isLoading ? 'Analyzing...' : 'Take a photo or upload one'}
						</span>
					</label>
				</div>

				{result ? (
					<div className={styles.analysisInfo}>
						<h3 className={styles.infoTitle}>Analysis Result: {result.name}</h3>
						<ul className={styles.infoList}>
							<li>Portion: {result.portion} g</li>
							<li>Calories: {result.calories} kcal</li>
							<li>Protein: {result.protein} g</li>
							<li>Carbs: {result.carbs} g</li>
							<li>Fat: {result.fat} g</li>
						</ul>
					</div>
				) : (
					<div className={styles.analysisInfo}>
						<h3 className={styles.infoTitle}>AI will analyze:</h3>
						<ul className={styles.infoList}>
							<li>Food products</li>
							<li>Estimated portion</li>
							<li>Calories</li>
							<li>Protein / Carbs / Fat</li>
						</ul>
					</div>
				)}
			</div>
		</PageLayout>
	)
}
