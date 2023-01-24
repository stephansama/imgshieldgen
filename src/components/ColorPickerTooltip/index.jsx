import { cloneElement, useState } from 'react'
import { Box, ClickAwayListener, Tooltip } from '@mui/material'
import { SketchPicker } from 'react-color'

export default function ColorPickerTooltip({ children, color, setColor }) {
	const [openColorPicker, setOpenColorPicker] = useState(false)
	const [localColor, setLocalColor] = useState(color)
	return (
		<ClickAwayListener onClickAway={() => setOpenColorPicker(false)}>
			<Box
				sx={{
					display: 'flex',
					minWidth: 'fit-content',
					minHeight: 'fit-content',
					flexDirection: 'column',
				}}
			>
				<Tooltip
					arrow
					disableFocusListener
					disableHoverListener
					disableTouchListener
					open={openColorPicker}
					title={
						<SketchPicker
							color={localColor}
							onChange={({ hex }) => setLocalColor(hex)}
							onChangeComplete={({ hex }) => setColor(hex)}
						/>
					}
					PopperProps={{ disablePortal: true }}
				>
					{cloneElement(children, {
						onClick: () => setOpenColorPicker(true),
						style: { cursor: 'pointer' },
					})}
				</Tooltip>
			</Box>
		</ClickAwayListener>
	)
}
