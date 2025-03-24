const navItems = [
	{ icon: '/images/nav-1.png', link: '', title: '', id: '1' },
	{ icon: '/images/nav-2.png', link: '', title: '', id: '2' },
	{ icon: '/images/nav-3.png', link: '', title: '', id: '3' },
	{ icon: '/images/nav-4.png', link: '', title: '', id: '4' },
	{ icon: '/images/nav-5.png', link: '', title: '', id: '5' },
	{ icon: '/images/nav-6.png', link: '', title: '', id: '6' },
	{ icon: '/images/nav-7.png', link: '', title: '', id: '7' },
	{ icon: '/images/nav-8.png', link: '', title: '', id: '8' },
]

function Sidebar() {
	return (
		<div className='w-full flex flex-col h-full'>
			<div className='w-full sticky top-0 min-h-[80px] flex flex-col justify-between items-center'>
				<img className='m-auto' src='/images/logo.png' alt='logo' />
			</div>
			<div className='flex flex-col w-[40px] items-center border-t h-full overflow-y-auto scrollbar-hide border-gray-300 gap-5 py-5 mx-auto'>
				<h1 className='text-xs text-gray-500'>MAIN</h1>
				<div className='flex flex-col gap-5'>
					{navItems.map(item => (
						<div key={item.id} className='mx-auto'>
							<img
								src={item.icon}
								className=' size-[20px] object-contain cursor-pointer'
								alt='icon'
							/>
						</div>
					))}
					<div className='flex flex-col items-center gap-5'>
						<h1 className='text-xs text-gray-500'>FAV</h1>
						<div className='size-2 rounded-full bg-red-600'></div>
						<div className='size-2 rounded-full bg-violet-600'></div>
						<div className='size-2 rounded-full bg-yellow-600'></div>
					</div>
				</div>
			</div>
			<div className='flex flex-col mx-auto items-center sticky bottom-0 gap-5 py-5'>
				<div className='border-b w-[40px] border-gray-300 flex justify-center items-center py-5 gap-3 flex-col'>
					<div className='bg-[#F6F8FA] shadow-lg flex rounded-lg size-[36px] overflow-hidden relative'>
						<div className='absolute h-[60%] -left-0.5 top-1/2 -translate-y-1/2 w-[6px] rounded-full bg-primary'></div>
						<img
							className='size-[20px] m-auto'
							src='/images/settings.png'
							alt='settings'
						/>
					</div>
					<div className='flex rounded-lg size-[36px]'>
						<img
							className='size-[20px] m-auto'
							src='/images/headphone.png'
							alt='headphone'
						/>
					</div>
				</div>
				<img className='mx-auto' src='/images/Avatar.png' alt='' />
			</div>
		</div>
	)
}

export default Sidebar
