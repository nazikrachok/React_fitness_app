import React from 'react'
import styles from './InputField.module.css'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<input className={styles.input} {...props} />
		</div>
	)
}
