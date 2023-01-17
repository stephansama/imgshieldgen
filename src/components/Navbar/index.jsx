import { useContext } from 'react'
// MUI
import { ButtonGroup, IconButton, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

import { GlobalContext } from '@/context'

import { displayName, name, repository } from '@pkg'

export default function Navbar({ title }) {
	const { isDark, toggleDarkmode } = useContext(GlobalContext)
	const isMobile = useMediaQuery('(max-width:600px)')
	return (
		<AppBar position='fixed' color='primary'>
			<Toolbar
				sx={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant='h5'>{isMobile ? name : displayName}</Typography>
				<ButtonGroup>
					<IconButton component='a' href={repository} target='_blank'>
						<GitHubIcon />
					</IconButton>
					<IconButton onClick={() => toggleDarkmode()}>
						{isDark ? <Brightness4Icon /> : <Brightness7Icon />}
					</IconButton>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}
