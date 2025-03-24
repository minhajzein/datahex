import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Appointments from '../components/appointments/Appointments'
import AddAppoinmentForm from '../components/appointments/AddAppoinmentForm'

function ReceptionistRoute() {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route element={<Layout />}>
					<Route path='/' element={<Appointments />} />
					<Route path='/add-new-appointment' element={<AddAppoinmentForm />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default ReceptionistRoute
