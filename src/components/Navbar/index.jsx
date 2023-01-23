import { useEffect, useContext } from 'react'
// MUI
import {
	ButtonGroup,
	IconButton,
	Tooltip,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

import { GlobalContext } from '@/context'

import { displayName, name, repository } from '@pkg'

export default function Navbar() {
	const { isDark, toggleDarkmode } = useContext(GlobalContext)
	const { GlobalStyles } = useTheme()
	const isMobile = useMediaQuery('(max-width:600px)')
	return (
		<AppBar position='relative' color='primary'>
			<Toolbar
				sx={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'space-between',
					zIndex: 101,
				}}
			>
				<Typography variant='h5' className={GlobalStyles['no-select']}>
					{isMobile ? name : displayName}
				</Typography>
				<ButtonGroup>
					<Tooltip title='GitHub repository' placement='bottom'>
						<IconButton component='a' href={repository} target='_blank'>
							<GitHubIcon />
						</IconButton>
					</Tooltip>
					<Tooltip
						title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
						placement='bottom'
					>
						<IconButton onClick={toggleDarkmode}>
							{isDark ? <Brightness4Icon /> : <Brightness7Icon />}
						</IconButton>
					</Tooltip>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}
