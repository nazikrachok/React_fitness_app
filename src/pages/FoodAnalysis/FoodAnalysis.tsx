import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { FiCamera } from 'react-icons/fi'
import styles from './FoodAnalysis.module.css'

export const FoodAnalysis: React.FC = () => {
	return (
		<PageLayout>
			<div className={styles.header}>
				<h1 className={styles.title}>Calories</h1>
				<h2 className={styles.subtitle}>Analyze your meal using AI</h2>
			</div>

			<div className={styles.content}>
				<div className={styles.uploadArea}>
					<input type='file' id='file-upload' className={styles.fileInput} />
					<label htmlFor='file-upload' className={styles.uploadLabel}>
						<FiCamera className={styles.cameraIcon} />
						<span>Take a photo or upload one</span>
					</label>
				</div>

				<div className={styles.analysisInfo}>
					<h3 className={styles.infoTitle}>AI will analyze:</h3>
					<ul className={styles.infoList}>
						<li>Food products</li>
						<li>Estimated portion</li>
						<li>Calories</li>
						<li>Protein / Carbs / Fat</li>
					</ul>
				</div>
			</div>
		</PageLayout>
	)
}
