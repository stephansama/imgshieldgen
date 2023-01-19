import { SvgIcon } from '@mui/material'

export default function SimpleIcon({ icon, colored, sx }) {
	return (
		<SvgIcon
			fontSize='large'
			htmlColor={colored ? `#${icon.hex}` : ''}
			sx={{ ...sx }}
		>
			<path d={icon.path} />
		</SvgIcon>
	)
}
