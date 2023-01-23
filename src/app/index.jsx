import { Box, useTheme } from '@mui/material'

import Navbar from '@components/Navbar'
import Preview from '@components/Preview'
import IconPicker from '@components/IconPicker'
import BadgeBuilder from '@components/BadgeBuilder'

export default function App() {
	const { GlobalStyles } = useTheme()
	return (
		<Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexGrow: 1, overflowY: 'hidden' }}>
				<IconPicker />
				<Preview>
					<img
						className={GlobalStyles[`no-select`]}
						src='https://api.netlify.com/api/v1/badges/a0210912-a859-4ea1-960c-9638b5fe0776/deploy-status'
						alt='netlify'
					/>
				</Preview>
				<BadgeBuilder />
			</Box>
		</Box>
	)
}
