import { Select } from 'antd'
import { useState } from 'react'
import AppointmentTable from './AppointmentTable'
import { Link } from 'react-router-dom'

const options = ['time', 'date', 'dietician']
const dieticians = ['All', 'Manama', 'Riffa', 'Sanabis', 'Askar', 'Zallaq']

function Appointments() {
	const [isActive, setIsActive] = useState(dieticians[0])

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col'>
				<h1 className='font-semibold text-sm'>Appointments</h1>
				<p className='text-xs font-light'>
					Display all the team members and essential details.
				</p>
			</div>
			<div className='flex justify-between'>
				<div className='flex gap-3'>
					<div className='size-[40px] border rounded-lg border-gray-300 flex'>
						<img
							className='m-auto size-[20px]'
							src='/images/search.png'
							alt='search_tab'
						/>
					</div>
					<Select
						placeholder='Sort By'
						onChange={value => value}
						showSearch
						optionFilterProp='children'
						filterOption={(input, option) =>
							option.props.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
						className='text-sm rounded-lg'
						prefix={<img src='/images/sort-desc.png' alt='' />}
						size='large'
					>
						{options?.map(stream => (
							<Select.Option value={stream} key={stream}>
								{stream}
							</Select.Option>
						))}
					</Select>
					<div className='bg-secondary flex rounded-lg p-1'>
						{dieticians.map(dietician => (
							<div
								className={`text-xs w-[95px] cursor-pointer flex items-center justify-center ${
									isActive === dietician &&
									'bg-white rounded-md shadow-xs shadow-black/30'
								}`}
								onClick={() => setIsActive(dietician)}
								key={dietician}
							>
								{dietician}
							</div>
						))}
					</div>
				</div>
				<Link
					to='/add-new-appointment'
					className='bg-primary px-3 text-xs flex items-center rounded-lg text-white'
				>
					Add New Appoinment
				</Link>
			</div>

			<AppointmentTable />
		</div>
	)
}

export default Appointments
