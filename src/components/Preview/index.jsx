import React from 'react'

import { Box } from '@mui/material'

import Footer from '@components/Footer'

import styles from './Preview.module.css'

export default function Preview({ children, color, grid }) {
	return (
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
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}
