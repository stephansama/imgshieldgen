import { Box, Drawer } from '@mui/material'
import Draggable from 'react-draggable'
import useResizable from '@hooks/useResizable'

export default function ResizableDrawer({ anchor, children, minWidth }) {
	const { resizeWidth, handleResize } = useResizable(anchor, minWidth)

	const invertDirection = (direction) =>
		direction === 'right' ? 'left' : 'right'

	return (
		<Draggable
			axis='x'
			handle='.drawerHandle'
			onDrag={handleResize}
			position={{}}
		>
			<Drawer
				anchor={anchor}
				variant='permanent'
				PaperProps={{
					style: {
						minWidth,
						width: `${resizeWidth}px`,
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
						maxHeight: '100%',
					},
				}}
				ModalProps={{ keepMounted: true }}
			>
				<Box
					className='drawerHandle'
					sx={{
						top: 0,
						width: '5px',
						bottom: 0,
						zIndex: 100,
						cursor: 'ew-resize',
						padding: '5px 0 0',
						position: 'absolute',
						[invertDirection(anchor)]: 0,
						bgcolor: ({ palette }) =>
							palette.getContrastText(palette.background.paper),
					}}
				/>
				<>{children}</>
			</Drawer>
		</Draggable>
	)
}
