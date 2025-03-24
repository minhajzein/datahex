import { Select } from 'antd'

const options = ['All', 'Manama', 'Riffa', 'Sanabis', 'Askar', 'Zallaq']
const locations = ['Pochinki', 'Gadka', 'Mylta', 'Gergopool', 'Zarki']

function FormHeader() {
	return (
		<div className='flex justify-between'>
			<div className='flex flex-col'>
				<h1 className='font-semibold text-sm'>Book An Appointment</h1>
				<p className='text-xs font-light'>
					Display all the team members and essential details.
				</p>
			</div>
			<div className='flex gap-5'>
				<div className='flex items-center gap-2'>
					<h1 className='text-sm text-gray-500'>Dietician</h1>
					<Select
						placeholder='All Dietician'
						onChange={value => value}
						showSearch
						optionFilterProp='children'
						filterOption={(input, option) =>
							option.props.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
						className='text-sm rounded-lg'
						size='middle'
					>
						{options?.map(stream => (
							<Select.Option value={stream} key={stream}>
								{stream}
							</Select.Option>
						))}
					</Select>
				</div>
				<div className='flex items-center gap-2'>
					<h1 className='text-sm text-gray-500'>Locations</h1>
					<Select
						placeholder='All Locations'
						onChange={value => value}
						showSearch
						optionFilterProp='children'
						filterOption={(input, option) =>
							option.props.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
						className='text-sm rounded-lg'
						size='middle'
					>
						{locations?.map(stream => (
							<Select.Option value={stream} key={stream}>
								{stream}
							</Select.Option>
						))}
					</Select>
				</div>
			</div>
		</div>
	)
}

export default FormHeader
