import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../../components/InputField/InputField'
import { Button } from '../../components/Button/Button'
import styles from './Login.module.css'

export const Login: React.FC = () => {
	const navigate = useNavigate()

	const handleLogin = (e: React.ChangeEvent) => {
		e.preventDefault()
		navigate('/home')
	}

	return (
		<div className={styles.container}>
			<div className={styles.formBox}>
				<h1 className={styles.title}>Sign in to FitAI</h1>
				<p className={styles.subtitle}>
					Welcome back. Continue your health plan.
				</p>

				<form onSubmit={handleLogin}>
					<InputField
						label='Email address'
						type='email'
						placeholder='nazar@example.com'
						required
					/>
					<InputField
						label='Password'
						type='password'
						placeholder='••••••••'
						required
					/>
					<Button type='submit' variant='primary'>
						Log in
					</Button>
				</form>
			</div>
		</div>
	)
}
