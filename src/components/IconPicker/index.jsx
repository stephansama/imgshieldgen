import { useCallback, useState } from 'react'

import { Box, Drawer } from '@mui/material'

import Icons from 'simple-icons'

import Search from './Search'
import SimpleIcon from './SimpleIcon'

export default function IconPicker() {
	const [drawerWidth, setDrawerWidth] = useState(40)
	const [filterText, setFilterText] = useState('')

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
			<SimpleIcon icon={Icons.siSimpleicons} sx={{ mx: 'auto' }} />
			<Search value={filterText} setValue={setFilterText} />
			<div>
				{Object.entries(Icons).map(
					([name, value], i) =>
						(filterText.length === 0 ||
							value.title.toLowerCase().includes(filterText.toLowerCase())) && (
							<SimpleIcon icon={value} colored sx={{ mx: 'auto' }} key={i} />
						)
				)}
			</div>
		</Drawer>
	)
}
