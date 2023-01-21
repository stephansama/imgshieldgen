import { Box, Tooltip } from '@mui/material'
import { siSimpleicons } from 'simple-icons'

import SimpleIcon from './SimpleIcon'

export default function SimpleIconLogo() {
	return (
		<Tooltip title={siSimpleicons.title} placement='right'>
			<Box
				sx={{
					p: '10px',
					my: '10px',
					mx: 'auto',
					width: 'min-content',
					height: 'min-content',
					border: '2px solid black',
					cursor: 'pointer',
					bgcolor: '#fff',
					display: 'flex',
					alignItems: 'center',
					borderRadius: '50%',
					justifyContent: 'center',
				}}
				component='a'
				target='_blank'
				href='https://simpleicons.org/'
			>
				<SimpleIcon colored icon={siSimpleicons} />
			</Box>
		</Tooltip>
	)
}
