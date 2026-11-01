import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	FiPieChart,
	FiCpu,
	FiTarget,
	FiSettings,
	FiBell,
	FiUser,
	FiMenu
} from 'react-icons/fi'
import styles from './PageLayout.module.css'

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const location = useLocation()
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className={styles.layout}>
			<header className={styles.topbar}>
				<div className={styles.logoArea}>
					<button className={styles.menuBtn} onClick={toggleSidebar}>
						<FiMenu />
					</button>
					<h1 className={styles.logo}>BeingFitAI</h1>
				</div>

				<div className={styles.topbarActions}>
					<div className={styles.actionItem}>
						<FiBell className={styles.topIcon} />
						<span>Notifications</span>
					</div>
					<div className={styles.actionItem}>
						<div className={styles.avatar}>
							<FiUser />
						</div>
						<span>Nazar</span>
					</div>
				</div>
			</header>

			<div className={styles.bodyWrapper}>
				<aside
					className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
				>
					<nav className={styles.nav}>
						<Link
							to='/home'
							className={location.pathname === '/home' ? styles.active : ''}
						>
							<FiPieChart className={styles.icon} />
							{isSidebarOpen && (
								<span className={styles.linkText}>Dashboard</span>
							)}
						</Link>

						<Link
							to='/food'
							className={location.pathname === '/food' ? styles.active : ''}
						>
							<FiTarget className={styles.icon} />
							{isSidebarOpen && (
								<span className={styles.linkText}>Nutrition</span>
							)}
						</Link>

						<Link
							to='/trainer'
							className={location.pathname === '/trainer' ? styles.active : ''}
						>
							<FiCpu className={styles.icon} />
							{isSidebarOpen && (
								<span className={styles.linkText}>AI Trainer</span>
							)}
						</Link>

						<div className={styles.divider}></div>

						<Link to='/settings' className={styles.settingsLink}>
							<FiSettings className={styles.icon} />
							{isSidebarOpen && (
								<span className={styles.linkText}>Settings</span>
							)}
						</Link>
					</nav>
				</aside>

				<main className={styles.mainContent}>
					<div className={styles.contentContainer}>{children}</div>
				</main>
			</div>
		</div>
	)
}
