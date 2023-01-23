import { useContext } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material'
import { PreviewContext } from '.'

import SaveIcon from '@mui/icons-material/Save'

export default function Modal() {
	const { dialogOpen, closeDialog } = useContext(PreviewContext)
	return (
		<Dialog open={dialogOpen} onClose={closeDialog}>
			<DialogTitle>Change export settings</DialogTitle>
			<DialogContent>
				<>changing something...</>
			</DialogContent>
			<DialogActions>
				<Button endIcon={<SaveIcon />} variant='contained'>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	)
}
