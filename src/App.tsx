import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { FoodAnalysis } from './pages/FoodAnalysis/FoodAnalysis'
import { FitnessTrainer } from './pages/FitnessTrainer/FitnessTrainer'
import { Settings } from './pages/Settings/Settings.tsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/food' element={<FoodAnalysis />} />
				<Route path='/trainer' element={<FitnessTrainer />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
