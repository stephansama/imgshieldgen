import { createContext, useCallback, useState } from 'react'

import { Box, Drawer, Tooltip } from '@mui/material'

import Search from './Search'
import SimpleIcon from './SimpleIcon'

// TODO: lazy load icons
import allSimpleIcons from 'simple-icons'
import useIcons from '@hooks/useIcons'

export const IconPickerContext = createContext()

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
				<Tooltip title='Simple Icons' placement='right'>
					<Box
						sx={{
							width: 'min-content',
							height: 'min-content',
							mx: 'auto',
							my: '10px',
							p: '10px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: '2px solid black',
							borderRadius: '50%',
							// boxShadow: 3,
							cursor: 'pointer',
							bgcolor: '#fff',
						}}
						component='a'
						target='_blank'
						href='https://simpleicons.org/'
					>
						<SimpleIcon colored icon={allSimpleIcons.siSimpleicons} />
					</Box>
				</Tooltip>
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
								justifyContent: 'center',
								alignItems: 'center',
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
