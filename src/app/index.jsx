import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import IconPicker from '@components/IconPicker'
import { Box } from '@mui/material'

export default function App() {
	return (
		<Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexGrow: 1, overflowY: 'hidden' }}>
				<IconPicker />
				<Footer />
			</Box>
		</Box>
	)
}
