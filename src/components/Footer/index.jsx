import { Box, Divider, Typography } from '@mui/material'

import { name, repository } from '@pkg'

export default function Footer() {
	const linkStyles = {
		textDecoration: 'none',
		'&:hover': { textDecoration: 'underline' },
	}

	return (
		<div>
			<Divider />
			<Box
				sx={{
					p: '5px',
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant='body1'>
					&copy;{'  '}
					<Typography
						component='a'
						target='_blank'
						color='secondary'
						href={repository}
						sx={linkStyles}
					>
						{name}
					</Typography>
				</Typography>
				<Typography variant='body1'>
					Built using{' '}
					<Typography
						component='a'
						target='_blank'
						color='primary'
						href='https://shields.io/'
						sx={linkStyles}
					>
						shields.io
					</Typography>
					<> & </>
					<Typography
						component='a'
						target='_blank'
						color='primary'
						href='https://simpleicons.org/'
						sx={linkStyles}
					>
						Simple Icons
					</Typography>
				</Typography>
			</Box>
		</div>
	)
}
