import { createContext, useState } from 'react'

import { Box } from '@mui/material'

import Footer from '../Footer'
import Toolbar from './Toolbar'

import styles from './Preview.module.css'

export const PreviewContext = createContext()

export default function Preview({ children, color, useGrid }) {
	const [grid, setGrid] = useState(useGrid)
	return (
		<PreviewContext.Provider value={{ grid, setGrid }}>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					flexDirection: 'column',
				}}
			>
				<Box
					className={grid ? styles.grid : ''}
					sx={{
						display: 'flex',
						bgcolor: color ? color : '',
						flexGrow: 1,
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexGrow: 1,
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
