import { createContext, useCallback, useState } from 'react'

import { Box, Drawer } from '@mui/material'

import Search from './Search'
import SimpleIcon from './SimpleIcon'

// TODO: lazy load icons
import allSimpleIcons from 'simple-icons'
import useIcons from '@hooks/useIcons'

export const IconPickerContext = createContext()

export default function IconPicker() {
	const [drawerWidth, setDrawerWidth] = useState(358)
	const [filterText, setFilterText] = useState('')

	const { shownIcons } = useIcons(allSimpleIcons, filterText)

	const handleMouseDown = () => {
		document.addEventListener('mouseup', handleMouseUp, true)
		document.addEventListener('mousemove', handleMouseMove, true)
	}

	const handleMouseUp = () => {
		document.removeEventListener('mouseup', handleMouseUp, true)
		document.removeEventListener('mousemove', handleMouseMove, true)
	}

	const handleMouseMove = useCallback((e) => {
		const newWidth = e.clientX - document.body.offsetLeft
		if (newWidth > 40 && newWidth < 5000) setDrawerWidth(newWidth)
	}, [])

	return (
		<Drawer
			anchor='left'
			variant='permanent'
			PaperProps={{
				style: { width: drawerWidth, position: 'relative' },
			}}
		>
			<Box
				onMouseDown={handleMouseDown}
				sx={{
					width: '5px',
					cursor: 'ew-resize',
					padding: '4px 0 0',
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					zIndex: 100,
					bgcolor: ({ palette }) =>
						palette.getContrastText(palette.background.paper),
				}}
			/>
			<SimpleIcon icon={allSimpleIcons.siSimpleicons} sx={{ mx: 'auto' }} />
			<Search value={filterText} setValue={setFilterText} />
			<Box
				sx={{
					bottom: 0,
					overflowY: 'scroll',
					height: '87%',
					position: 'absolute',
				}}
			>
				{shownIcons.map((icon, i) => (
					<SimpleIcon icon={icon} colored key={i} />
				))}
			</Box>
		</Drawer>
	)
}
