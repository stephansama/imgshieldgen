import React from 'react'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'

export default function Search({ value, setValue }) {
	return (
		<Box sx={{ px: { sm: '25px' } }}>
			<TextField
				id=''
				label=''
				sx={{ p: 0, m: 0 }}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				fullWidth
			/>
		</Box>
	)
}
