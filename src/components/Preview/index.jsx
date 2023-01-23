import { createContext, useState } from 'react'

import Draggable from 'react-draggable'

import { Box } from '@mui/material'

import useLocalStorage from '@hooks/useLocalStorage'

import Footer from '../Footer'
import Modal from './Modal'
import Toolbar from './Toolbar'

import styles from './Preview.module.css'

export const PreviewContext = createContext()

export default function Preview({ children, color, useGrid = false }) {
	const [grid, setGrid] = useLocalStorage('grid', useGrid)
	const [dialogOpen, setDialogOpen] = useState(false)
	const [position, setPosition] = useState(null)

	const toggleGrid = () => setGrid((prev) => !prev)
	const openDialog = () => setDialogOpen(true)
	const closeDialog = () => setDialogOpen(false)
	const togglePositionLock = () =>
		setPosition((prev) => (!prev ? { x: 0, y: 0 } : null))

	const flexGrowStyle = {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
	}

	return (
		<PreviewContext.Provider
			value={{
				grid,
				toggleGrid,
				dialogOpen,
				openDialog,
				closeDialog,
				togglePositionLock,
				position,
			}}
		>
			<Box sx={flexGrowStyle}>
				<Box
					className={grid && styles.grid}
					sx={{ ...flexGrowStyle, bgcolor: color && color }}
				>
					<Box
						sx={{
							...flexGrowStyle,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Draggable
							bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
							position={position}
							defaultPosition={{ x: 0, y: 0 }}
						>
							<Box className={styles[`preview-container`]}>
								<>{children}</>
							</Box>
						</Draggable>
					</Box>
					<Toolbar />
				</Box>
				<Footer />
			</Box>
			<Modal />
		</PreviewContext.Provider>
	)
}
