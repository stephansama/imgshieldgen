import { Box } from '@mui/material'

import Navbar from '@components/Navbar'
import Preview from '@components/Preview'
import IconPicker from '@components/IconPicker'

export default function App() {
	return (
		<Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexGrow: 1, overflowY: 'hidden' }}>
				<IconPicker />
				<Preview grid />
			</Box>
		</Box>
	)
}
