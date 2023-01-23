import { useContext } from 'react'
import { PreviewContext } from '.'
import { ButtonGroup, IconButton, Tooltip } from '@mui/material'

import FileUploadIcon from '@mui/icons-material/FileUpload'
import GridOffIcon from '@mui/icons-material/GridOff'
import GridOnIcon from '@mui/icons-material/GridOn'

export default function Toolbar() {
	const { grid, toggleGrid } = useContext(PreviewContext)

	const ToolbarButton = ({ children, onClick, title }) => (
		<Tooltip arrow placement='top' title={title}>
			<IconButton onClick={onClick}>{children}</IconButton>
		</Tooltip>
	)

	return (
		<ButtonGroup
			variant='contained'
			sx={{
				p: '5px',
				my: '5px',
				mx: 'auto',
				bgcolor: (theme) => theme.palette.background.paper,
			}}
		>
			<ToolbarButton
				title={`Toggle grid ${grid ? 'off' : 'on'}`}
				onClick={toggleGrid}
			>
				<>{grid ? <GridOffIcon /> : <GridOnIcon />}</>
			</ToolbarButton>
			<ToolbarButton title='Export badge'>
				<FileUploadIcon />
			</ToolbarButton>
		</ButtonGroup>
	)
}
