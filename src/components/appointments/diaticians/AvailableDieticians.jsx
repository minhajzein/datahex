import React from 'react'

const dieticians = [
	{
		id: '1',
		name: 'Matheww Johnson',
		avatar: '/images/dietician-5.png',
	},
	{
		id: '2',
		name: 'Sophia Williams',
		avatar: '/images/dietician-2.png',
	},
	{
		id: '3',
		name: 'Arthur Tailor',
		avatar: '/images/dietician-4.png',
	},
	{
		id: '4',
		name: 'Emma Wright',
		avatar: '/images/dietician-1.png',
	},
	{
		id: '5',
		name: 'Sophia Lena Muller',
		avatar: '/images/dietician-3.png',
	},
	{
		id: '6',
		name: 'Matheww Johnson',
		avatar: '/images/dietician-5.png',
	},
	{
		id: '7',
		name: 'Sophia Williams',
		avatar: '/images/dietician-2.png',
	},
	{
		id: '8',
		name: 'Arthur Tailor',
		avatar: '/images/dietician-4.png',
	},
	{
		id: '9',
		name: 'Emma Wright',
		avatar: '/images/dietician-1.png',
	},
	{
		id: '10',
		name: 'Sophia Lena Muller',
		avatar: '/images/dietician-3.png',
	},
]

function AvailableDieticians({ className }) {
	return (
		<div
			className={`${className} flex border-x border-gray-300 p-2 flex-col gap-2`}
		>
			<h1 className='font-semibold text-sm w-full backdrop-blur bg-white sticky top-0'>
				Available Dieticians
			</h1>
			<div className='h-[450px] gap-2 flex flex-col overflow-y-auto scrollbar-hide'>
				{dieticians.map(dietician => (
					<label
						key={dietician.id}
						className='border-b px-2 hover:rounded-lg gap-2 w-full py-2 cursor-pointer border-gray-300 flex justify-between hover:bg-gray-200'
					>
						<img className='size-[40px]' src={dietician.avatar} alt='' />
						<div className='flex flex-col w-full'>
							<h1 className='text-start capitalize text-sm'>
								{dietician.name}
							</h1>
							<p className='text-[12px] text-gray-500'>Sample Text</p>
						</div>
						<input
							className='cursor-pointer'
							type='radio'
							name='dietician'
							value={dietician.id}
						/>
					</label>
				))}
			</div>
		</div>
	)
}

export default AvailableDieticians
