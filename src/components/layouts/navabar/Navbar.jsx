import React from 'react'

function Navbar() {
	return (
		<div className='h-[80px] p-5 shadow flex justify-between items-center shadow-black/10 w-full sticky top-0'>
			<div className='flex gap-2 items-center'>
				<div className='bg-secondary rounded-full p-2'>
					<img
						className='size-[24px]'
						src='/images/settings-nav.png'
						alt='settin'
					/>
				</div>
				<div className='flex flex-col'>
					<h1 className='font-semibold text-sm'>Settings Page</h1>
					<p className='text-xs font-thin'>
						Manage your preferences and configure various options.
					</p>
				</div>
			</div>
			<div className='size-[40px] flex'>
				<img
					className='m-auto cursor-pointer size-[20px]'
					src='/images/search.png'
					alt='search'
				/>
			</div>
		</div>
	)
}

export default Navbar
