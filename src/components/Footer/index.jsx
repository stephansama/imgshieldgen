import { Box, Divider, Typography } from '@mui/material'
import { styled } from '@mui/system'

import { name, repository } from '@pkg'

export default function Footer() {
	const StyledLink = styled(({ children, ...props }) => (
		<Typography component='a' target='_blank' color='secondary' {...props}>
			{children}
		</Typography>
	))({ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } })

	return (
		<>
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
					<StyledLink href={repository}>{name}</StyledLink>
				</Typography>
				<Typography variant='body1'>
					Built using{' '}
					<StyledLink href='https://shields.io/'>shields.io</StyledLink>
					<> & </>
					<StyledLink href='https://simpleicons.org/'>Simple Icons</StyledLink>
				</Typography>
			</Box>
		</>
	)
}
