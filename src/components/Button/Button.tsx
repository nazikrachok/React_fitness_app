import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	...props
}) => {
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...props}>
			{children}
		</button>
	)
}
