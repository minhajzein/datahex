function CalenderHeader({ value, type, onChange, onTypeChange }) {
	let current = value.clone()
	const localeData = value.localeData()
	const months = []
	for (let i = 0; i < 12; i++) {
		current = current.month(i)
		months.push(localeData.monthsShort(current))
	}

	let year = value.year()
	let month = value.month()

	const handleNext = () => {
		month++
		const now = value.clone().month(month)
		onChange(now)
	}

	const handlePrev = () => {
		month--
		const now = value.clone().month(month)
		onChange(now)
	}
	return (
		<div className='p-2'>
			<div className='w-full flex items-center justify-between p-2 bg-secondary rounded-lg'>
				<button
					onClick={handlePrev}
					type='button'
					className='p-2 cursor-pointer bg-white shadow rounded'
				>
					<img src='/images/arrow-left.png' alt='' />
				</button>
				<div className='flex text-sm font-semibold'>
					<h1 onClick={() => onTypeChange('month')} className='cursor-pointer'>
						{months[month]}
					</h1>
					,
					<h1 onClick={() => onTypeChange('year')} className='cursor-pointer'>
						{' ' + year}
					</h1>
				</div>

				<button
					onClick={handleNext}
					type='button'
					className='p-2 cursor-pointer bg-white shadow rounded'
				>
					<img src='/images/arrow-right.png' alt='' />
				</button>
			</div>
		</div>
	)
}

export default CalenderHeader
