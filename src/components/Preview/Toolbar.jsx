import { useContext } from 'react'
import { PreviewContext } from '.'
import { ButtonGroup, IconButton, Slider, Tooltip } from '@mui/material'

import FileUploadIcon from '@mui/icons-material/FileUpload'
import GridOffIcon from '@mui/icons-material/GridOff'
import GridOnIcon from '@mui/icons-material/GridOn'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import HeightIcon from '@mui/icons-material/Height'
import { GlobalContext } from '@/context'

export default function Toolbar() {
	const { grid, toggleGrid, openDialog, position, togglePositionLock } =
		useContext(PreviewContext)

	const { previewHeight, setPreviewHeight } = useContext(GlobalContext)

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
				title={`Change preview height to ${previewHeight === 20 ? 100 : 20}px`}
				onClick={() => setPreviewHeight((prev) => (prev === 20 ? 100 : 20))}
			>
				<HeightIcon />
			</ToolbarButton>
			<ToolbarButton
				title={`${position ? 'Unl' : 'L'}ock badge position`}
				onClick={togglePositionLock}
			>
				<>{position ? <LockIcon /> : <LockOpenIcon />}</>
			</ToolbarButton>
			<ToolbarButton
				title={`Toggle grid ${grid ? 'off' : 'on'}`}
				onClick={toggleGrid}
			>
				<>{grid ? <GridOffIcon /> : <GridOnIcon />}</>
			</ToolbarButton>
			<ToolbarButton title='Export badge' onClick={openDialog}>
				<FileUploadIcon />
			</ToolbarButton>
		</ButtonGroup>
	)
}
