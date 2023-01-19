import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import IconPicker from '@components/IconPicker'
import { Box } from '@mui/material'

export default function App() {
	return (
		<Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexGrow: 1 }}>
				<IconPicker />
				<Footer />
			</Box>
		</Box>
	)
}
