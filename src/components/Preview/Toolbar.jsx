import { useContext } from 'react'
import { PreviewContext } from '.'
import { Box, ButtonGroup, IconButton, Tooltip } from '@mui/material'

import GridOffIcon from '@mui/icons-material/GridOff'
import GridOnIcon from '@mui/icons-material/GridOn'
import FileUploadIcon from '@mui/icons-material/FileUpload'

export default function Toolbar() {
	const { grid, setGrid } = useContext(PreviewContext)
	const toggleGrid = () => setGrid((prev) => !prev)
	return (
		<Box sx={{ mx: 'auto', my: '5px' }}>
			<ButtonGroup
				variant='contained'
				sx={{ p: '5px', bgcolor: ({ palette }) => palette.background.paper }}
			>
				<Tooltip title={`Toggle grid ${grid ? 'off' : 'on'}`}>
					<IconButton onClick={toggleGrid}>
						<>{grid ? <GridOffIcon /> : <GridOnIcon />}</>
					</IconButton>
				</Tooltip>
				<IconButton>
					<FileUploadIcon />
				</IconButton>
			</ButtonGroup>
		</Box>
	)
}
