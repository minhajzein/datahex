import dayjs from 'dayjs'
import generateHours from '../../../utils/generateHours'

function TimePicker({ hour, setHour, date }) {
	return (
		<div
			className={`h-full w-[15%] border-l relative border-gray-300 scrollbar-hide items-center flex p-2 flex-col gap-2`}
		>
			<h1 className='font-semibold text-sm w-full backdrop-blur text-center bg-white sticky top-0'>
				{dayjs(date).format('ddd, DD MMMM')}
			</h1>
			<div className='overflow-hidden overflow-y-auto flex flex-col gap-1 scrollbar-hide'>
				{generateHours().map(currentHour => (
					<button
						key={currentHour}
						type='button'
						onClick={() => setHour(currentHour)}
						className={`${
							currentHour === hour && 'bg-primary text-white group'
						} py-3 border h-[56px] w-[180px] cursor-pointer border-gray-300 flex flex-col justify-center items-center rounded-lg`}
					>
						<h1 className='text-[16px]'>{currentHour}</h1>
						<p
							className={`${
								hour === currentHour && 'text-white'
							} text-[13px] text-gray-500 group-text-white`}
						>
							No Dieticians Available
						</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default TimePicker
