import React from 'react'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { FiClock, FiDroplet, FiStar, FiArrowRight } from 'react-icons/fi'
import styles from './Home.module.css'

export const Home: React.FC = () => {
	return (
		<PageLayout>
			<div className={styles.header}>
				<h1 className={styles.title}>Good morning, Nazar!</h1>
				<h2 className={styles.subtitle}>Here’s your progress for today</h2>
			</div>

			<div className={styles.topGrid}>
				<div className={styles.column}>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>Calories</h3>
						<div className={styles.caloriesInfo}>
							<span className={styles.bigNumber}>
								1230 <small>/2100</small>
							</span>
							<span className={styles.remaining}>870 remaining</span>
						</div>
						<div className={styles.progressBar}>
							<div
								className={styles.progressFill}
								style={{ width: '60%' }}
							></div>
						</div>
					</div>

					<div className={`${styles.card} ${styles.aiCard}`}>
						<h3 className={styles.cardTitle}>✨ AI nutrition advice</h3>
						<p className={styles.aiText}>
							Today try to get the most of your protein goal by dairy products,
							since tomorrow you closed it by meat.
						</p>
					</div>
				</div>

				<div className={styles.column}>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>Today</h3>
						<ul className={styles.statsList}>
							<li>
								<div className={styles.statLabel}>
									<FiClock /> Workout
								</div>
								<div className={styles.statValue}>45 min</div>
							</li>
							<li>
								<div className={styles.statLabel}>
									<FiDroplet /> Water
								</div>
								<div className={styles.statValue}>1.8 L</div>
							</li>
							<li>
								<div className={styles.statLabel}>
									<FiStar /> Protein
								</div>
								<div className={styles.statValue}>145 g</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.planSection}>
				<h2 className={styles.sectionTitle}>Today plan</h2>
				<div className={styles.planGrid}>
					<div className={styles.planCard}>
						<h4 className={styles.planTitle}>Workout</h4>
						<p className={styles.planMain}>Upper body</p>
						<p className={styles.planSub}>45 min</p>
						<a href='#' className={styles.planLink}>
							Start <FiArrowRight />
						</a>
					</div>

					<div className={styles.planCard}>
						<h4 className={styles.planTitle}>Nutrition</h4>
						<p className={styles.planMain}>1230 kcal</p>
						<p className={styles.planSub}>145 g protein</p>
						<a href='#' className={styles.planLink}>
							Open <FiArrowRight />
						</a>
					</div>

					<div className={styles.planCard}>
						<h4 className={styles.planTitle}>Hydration</h4>
						<p className={styles.planMain}>1.8 / 2.5 L</p>
						<p className={styles.planSub}>Keep drinking</p>
						<a href='#' className={styles.planLink}>
							Open <FiArrowRight />
						</a>
					</div>
				</div>
			</div>
		</PageLayout>
	)
}
