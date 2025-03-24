import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navabar/Navbar'
import Sidebar from './sidebar/Sidebar'

function Layout() {
	return (
		<div className='w-full h-dvh flex'>
			<div className='w-[80px] shadow shadow-black/30 h-full'>
				<Sidebar />
			</div>
			<div className='flex flex-col w-full'>
				<Navbar />
				<div className='p-5 overflow-y-auto'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
