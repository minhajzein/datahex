import { Calendar } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import CalenderHeader from './CalenderHeader'

function Calender({ className, setDate }) {
	return (
		<Calendar
			fullscreen={false}
			onChange={value => setDate(value.format('YYYY-MM-DD'))}
			headerRender={({ value, type, onChange, onTypeChange }) => (
				<CalenderHeader
					value={value}
					type={type}
					onChange={onChange}
					onTypeChange={onTypeChange}
				/>
			)}
			className={className}
		/>
	)
}

export default Calender
