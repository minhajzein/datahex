import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ReceptionistRoute from './routes/ReceptionistRoute'

function App() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<ReceptionistRoute />} />
			</Routes>
			<ToastContainer />
		</>
	)
}

export default App
