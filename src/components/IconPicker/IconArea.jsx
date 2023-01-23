import { useContext } from 'react'
import { Box, Tooltip } from '@mui/material'

import { IconPickerContext } from '.'
import SimpleIcon from './SimpleIcon'

export default function IconArea() {
	const { shownIcons, lastIconRef } = useContext(IconPickerContext)
	return (
		<Box
			sx={{
				display: 'flex',
				flexGrow: 1,
				flexWrap: 'wrap',
				overflowY: 'auto',
				alignContent: 'flex-start',
				justifyContent: 'center',
			}}
		>
			{shownIcons.map((icon, i, allIcons) => (
				<Tooltip key={i} title={icon.title}>
					<Box
						sx={{
							p: '5px',
							width: 'min-content',
							height: 'min-content',
							bgcolor: '#fff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						ref={i === allIcons.length - 1 ? lastIconRef : null}
					>
						<SimpleIcon icon={icon} colored />
					</Box>
				</Tooltip>
			))}
		</Box>
	)
}
