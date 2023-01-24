import { useContext, useState } from 'react'
import {
	Box,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material'
import { GlobalContext } from '@/context'
import ResizableDrawer from '../ResizableDrawer'
import ColorPickerTooltip from '../ColorPickerTooltip'

import ColorLensIcon from '@mui/icons-material/ColorLens'

export default function BadgeBuilder() {
	const { badgeOptions, updateBadgeOption, badgeStyleOptions } =
		useContext(GlobalContext)
	return (
		<ResizableDrawer anchor='right' minWidth='250'>
			<FormControl>
				<InputLabel>Style</InputLabel>
				<Select
					value={badgeOptions.style}
					onChange={(e) => updateBadgeOption('style', e.target.value)}
				>
					{badgeStyleOptions.map((style, i) => (
						<MenuItem value={style} key={i}>
							{style}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			{/* Text Inputs */}
			{['label', 'message'].map((x, i) => (
				<FormControl key={i} onSubmit={(e) => e.preventDefault()}>
					<TextField
						sx={{ ml: '5px', display: 'flex', flexGrow: 1 }}
						label={x}
						placeholder={x}
						onChange={(e) => updateBadgeOption(x, e.target.value)}
					/>
				</FormControl>
			))}
			{/* Color Inputs */}
			{['labelColor', 'logoColor', 'color'].map((x, i) => (
				<Box
					key={i}
					sx={{
						ml: '5px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography>{x}</Typography>
					<Box
						sx={{
							display: 'flex',
							flexGrow: 1,
							mx: 'auto',
							justifyContent: 'flex-end',
						}}
					>
						<ColorPickerTooltip
							color={badgeOptions[x]}
							setColor={(hex) => updateBadgeOption(x, hex)}
						>
							<Box
								sx={(theme) => {
									const contrast = theme.palette.getContrastText(
										theme.palette.background.default
									)
									return {
										width: '20px',
										height: '20px',
										display: 'flex',
										position: 'relative',
										alignItems: 'center',
										justifyContent: 'center',
										bgcolor: badgeOptions[x],
										border: `2px solid ${contrast}`,
										[!badgeOptions[x] && '&::before']: {
											content: '""',
											position: 'absolute',
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											background: `
											linear-gradient(to top left,
												rgba(0,0,0,0) 0%,
												rgba(0,0,0,0) calc(50% - 0.8px),
												${contrast} 50%,
												rgba(0,0,0,0) calc(50% + 0.8px),
												rgba(0,0,0,0) 100%),
											linear-gradient(to top right,
												rgba(0,0,0,0) 0%,
												rgba(0,0,0,0) calc(50% - 0.8px),
												${contrast} 50%,
												rgba(0,0,0,0) calc(50% + 0.8px),
												rgba(0,0,0,0) 100%)`,
										},
									}
								}}
							/>
						</ColorPickerTooltip>
					</Box>
					<ColorPickerTooltip
						color={badgeOptions[x]}
						setColor={(hex) => updateBadgeOption(x, hex)}
					>
						<IconButton>
							<ColorLensIcon
								sx={{
									color: (theme) =>
										theme.palette.getContrastText(
											theme.palette.background.default
										),
								}}
							/>
						</IconButton>
					</ColorPickerTooltip>
				</Box>
			))}
		</ResizableDrawer>
	)
}
