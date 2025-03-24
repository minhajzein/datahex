import { useState } from 'react'
import Calender from './calender/Calender'
import FormHeader from './FormHeader'
import TimePicker from './time-picker/TimePicker'
import AvailableDieticians from './diaticians/AvailableDieticians'
import { Link } from 'react-router-dom'

const userTypes = ['Existing User', 'New User']

function AddAppoinmentForm() {
	const [date, setDate] = useState(new Date())
	const [hour, setHour] = useState('')
	const [userType, setUserType] = useState(userTypes[0])
	console.log(date)

	return (
		<form className='flex flex-col gap-5'>
			<FormHeader />
			<div className='flex w-full h-[400px] rounded-lg border border-gray-300'>
				<Calender className='w-[35%]' setDate={setDate} />
				<TimePicker hour={hour} setHour={setHour} date={date} />
				<AvailableDieticians className='w-[20%]' />
				<div className='p-2 flex overflow-y-auto scrollbar-hide flex-col w-[30%] gap-5'>
					<h1 className='font-semibold text-sm w-full backdrop-blur bg-white sticky top-0'>
						Details
					</h1>
					<div className='grid grid-cols-2 p-1 bg-secondary rounded-lg w-full'>
						{userTypes.map(type => (
							<label
								key={type}
								className={`${
									userType === type && 'bg-white rounded-md'
								} cursor-pointer text-xs flex justify-center p-1`}
							>
								{type}
								<input
									value={userType}
									name='userType'
									onChange={() => setUserType(type)}
									className='hidden'
									type='radio'
								/>
							</label>
						))}
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-xs' htmlFor='CPR'>
							CPR Number<span className=' text-primary'>*</span>
						</label>
						<input
							type='text'
							className='border border-gray-300 rounded-lg p-1 outline-none'
							id='CPR'
							name='CPR'
							placeholder='Enter user CPR Number'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-xs' htmlFor='phone'>
							Phone Number<span className=' text-primary'>*</span>
						</label>
						<input
							type='text'
							className='border border-gray-300 rounded-lg p-1 outline-none'
							id='phone'
							name='phone'
							placeholder='Enter Phne Number'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-xs' htmlFor='username'>
							Enter Your Name<span className=' text-primary'>*</span>
						</label>
						<input
							type='text'
							className='border border-gray-300 rounded-lg p-1 outline-none'
							id='username'
							name='username'
							placeholder='Enter user CPR Number'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-xs' htmlFor='type'>
							Appoinment Type<span className=' text-primary'>*</span>
						</label>
						<div className='flex gap-14 items-center'>
							<label className='gap-2 cursor-pointer  flex items-center p-1'>
								<input
									value={'online'}
									name='type'
									onChange={() => ''}
									type='radio'
									className='cursor-pointer'
								/>
								<h1>online</h1>
							</label>
							<label className='gap-2 cursor-pointer flex justify-center items-center p-1'>
								<input
									value={'offline'}
									name='type'
									onChange={() => '()'}
									type='radio'
									className='cursor-pointer'
								/>
								<h1>offline</h1>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-end items-center gap-3'>
				<Link
					to='/'
					className='border px-4 py-1 text-sm rounded-lg border-gray-400'
				>
					Cancel
				</Link>
				<button
					type='submit'
					className='bg-primary cursor-pointer px-2 text-white rounded-lg text-sm py-1'
				>
					Book Now
				</button>
			</div>
		</form>
	)
}

export default AddAppoinmentForm
