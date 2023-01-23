import { createContext } from 'react'

import { Box } from '@mui/material'

import useLocalStorage from '@hooks/useLocalStorage'

import Footer from '../Footer'
import Toolbar from './Toolbar'

import styles from './Preview.module.css'

export const PreviewContext = createContext()

export default function Preview({ children, color, useGrid = false }) {
	const [grid, setGrid] = useLocalStorage('grid', useGrid)
	const toggleGrid = () => setGrid((prev) => !prev)

	const flexGrowStyle = {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
	}

	return (
		<PreviewContext.Provider value={{ grid, toggleGrid }}>
			<Box sx={flexGrowStyle}>
				<Box
					className={grid ? styles.grid : ''}
					sx={{ ...flexGrowStyle, bgcolor: color ? color : '' }}
				>
					<Box
						sx={{
							...flexGrowStyle,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{children}
					</Box>
					<Toolbar />
				</Box>
				<Footer />
			</Box>
		</PreviewContext.Provider>
	)
}
