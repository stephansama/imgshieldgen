import { useContext } from 'react'
import { Box, Tooltip } from '@mui/material'

import { GlobalContext } from '@/context'
import { IconPickerContext } from '.'

import SimpleIcon from './SimpleIcon'

export default function IconArea() {
	const { shownIcons, lastIconRef } = useContext(IconPickerContext)
	const { selectIcon } = useContext(GlobalContext)
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
			{shownIcons.map((icon, i, totalArray) => (
				<Tooltip followCursor key={i} title={icon.title}>
					<Box
						sx={{
							p: '5px',
							width: 'min-content',
							height: 'min-content',
							cursor: 'pointer',
							bgcolor: '#fff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onClick={selectIcon(icon.slug)}
						ref={i === totalArray.length - 1 ? lastIconRef : null}
					>
						<SimpleIcon icon={icon} colored />
					</Box>
				</Tooltip>
			))}
		</Box>
	)
}
