import React from 'react'
import styles from './UploadArea.module.css'

export const UploadArea: React.FC = () => {
	return (
		<div className={styles.uploadBox}>
			<input
				type='file'
				id='file-upload'
				className={styles.hiddenInput}
				accept='image/*'
			/>
			<label htmlFor='file-upload' className={styles.label}>
				<span className={styles.icon}>📷</span>
				<span className={styles.text}>Take a photo or upload one</span>
			</label>
		</div>
	)
}
