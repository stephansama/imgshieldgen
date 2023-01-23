import { useState } from 'react'

import { Box, Tooltip } from '@mui/material'
import allSimpleIcons from 'simple-icons'

import ResizableDrawer from '../ResizableDrawer'

import SimpleIconLogo from './SimpleIconLogo'
import SimpleIcon from './SimpleIcon'
import Search from './Search'

import useIcons from '@hooks/useIcons'

export default function IconPicker() {
	const [filterText, setFilterText] = useState('')

	const { shownIcons } = useIcons(allSimpleIcons, filterText)

	return (
		<ResizableDrawer anchor='left' minWidth='250'>
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
		</ResizableDrawer>
	)
}
