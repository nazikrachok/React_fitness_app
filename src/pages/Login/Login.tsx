import React, { useState } from 'react'
import { InputField } from '../../components/InputField/InputField'
import { Button } from '../../components/Button/Button'
import styles from './Login.module.css'
import { useAuth } from '../../hooks/useAuth.ts'

export const Login: React.FC = () => {
	const { login, isLoading, error } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		login(email, password)
	}

	return (
		<div className={styles.container}>
			<div className={styles.formBox}>
				<h1 className={styles.title}>Sign in to FitAI</h1>
				<p className={styles.subtitle}>
					Welcome back. Continue your health plan.
				</p>

				<form onSubmit={handleLogin}>
					{error && (
						<div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>
					)}
					<InputField
						label='Email address'
						type='email'
						placeholder='nazar@example.com'
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputField
						label='Password'
						type='password'
						placeholder='••••••••'
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type='submit' variant='primary'>
						{isLoading ? 'Logging in...' : 'Log in'}
					</Button>
				</form>
			</div>
		</div>
	)
}
