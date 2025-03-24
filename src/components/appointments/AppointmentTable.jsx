import { Space, Table, Tag } from 'antd'
import Column from 'antd/es/table/Column'

function AppointmentTable() {
	return (
		<Table dataSource={[]} pagination={{ pageSize: 10, pageSizeOptions: 10 }}>
			<Column title='Full Name' dataIndex='fullName' key='fullName' />
			<Column title='Phone Number' dataIndex='phone' key='phone' />
			<Column title='App.Date' dataIndex='date' key='date' />
			<Column title='App.Time' dataIndex='time' key='time' />
			<Column title='Dietician' dataIndex='dietician' key='dietician' />
			<Column title='Date Of Booking' dataIndex='createdAt' key='createdAt' />
			<Column
				title='Offline/Online'
				dataIndex='type'
				key='type'
				render={type => (
					<Tag color={type === 'online' ? 'green' : 'red'}>
						{type.toUpperCase()}
					</Tag>
				)}
			/>
			<Column
				key='action'
				render={(_, record) => (
					<Space size='middle'>
						<a>Invite {}</a>
						<a>Delete</a>
					</Space>
				)}
			/>
		</Table>
	)
}

export default AppointmentTable
