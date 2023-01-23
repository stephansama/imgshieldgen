import { Box } from '@mui/material'
import Draggable from 'react-draggable'

import Navbar from '@components/Navbar'
import Preview from '@components/Preview'
import IconPicker from '@components/IconPicker'
import BadgeBuilder from '@components/BadgeBuilder'

import styles from './app.module.css'

export default function App() {
	return (
		<Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexGrow: 1, overflowY: 'hidden' }}>
				<IconPicker />
				<Preview>
					<Draggable
						bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
						defaultPosition={{ x: 0, y: 0 }}
					>
						<Box className={styles[`preview-container`]}>
							<img
								className={styles[`preview-img`]}
								src='https://api.netlify.com/api/v1/badges/a0210912-a859-4ea1-960c-9638b5fe0776/deploy-status'
								alt='netlify'
							/>
						</Box>
					</Draggable>
				</Preview>
				<BadgeBuilder />
			</Box>
		</Box>
	)
}
