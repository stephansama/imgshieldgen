import { useContext } from 'react'

import { Box } from '@mui/material'
import simpleIcons from '@assets/Simple Icons.svg'
import simpleIconsBlack from '@assets/Simple Icons black.svg'

import { GlobalContext } from '@/context'

export default function IconPicker() {
	const { isDark } = useContext(GlobalContext)
	return (
		<Box
			sx={{
				border: `1px solid ${isDark ? 'white' : 'black'}`,
				height: '100%',
				width: 'fit-content',
			}}
		>
			<Box
				component='img'
				src={isDark ? simpleIcons : simpleIconsBlack}
				sx={{ width: '50px', height: '50px' }}
			/>
		</Box>
	)
}
