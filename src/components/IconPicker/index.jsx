import { useCallback, useState } from 'react'

import { Box, Drawer, Tooltip } from '@mui/material'
import allSimpleIcons from 'simple-icons'

import useIcons from '@hooks/useIcons'

import SimpleIconLogo from './SimpleIconLogo'
import SimpleIcon from './SimpleIcon'
import Search from './Search'

export default function IconPicker() {
	const [drawerWidth, setDrawerWidth] = useState(380)
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
				style: {
					width: drawerWidth,
					display: 'flex',
					position: 'relative',
					maxHeight: '100%',
				},
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					py: '10px',
					borderBottom: '4px solid black',
				}}
			>
				<SimpleIconLogo />
				<Search value={filterText} setValue={setFilterText} />
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexWrap: 'wrap',
					overflowY: 'auto',
					alignContent: 'flex-start',
					justifyContent: 'center',
				}}
			>
				{shownIcons.map((icon, i) => (
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
						>
							<SimpleIcon icon={icon} colored />
						</Box>
					</Tooltip>
				))}
			</Box>
		</Drawer>
	)
}
