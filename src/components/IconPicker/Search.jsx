import { useContext } from 'react'
import { Autocomplete, Box, TextField } from '@mui/material'
import { IconPickerContext } from '.'

export default function Search() {
	const { iconFilter, setIconFilter, autoCompleteIconNames } =
		useContext(IconPickerContext)

	const updateInput = (_, newValue) =>
		setIconFilter(typeof newValue === 'string' ? newValue : newValue.label)

	return (
		<Autocomplete
			freeSolo
			disablePortal
			id='combo-box-demo'
			options={autoCompleteIconNames}
			inputValue={iconFilter ?? ''}
			getOptionLabel={(option) =>
				typeof option === 'string' ? option : option.label
			}
			onInputChange={updateInput}
			onChange={updateInput}
			renderInput={(params) => (
				<Box sx={{ px: '5px' }}>
					<TextField
						{...params}
						variant='standard'
						placeholder='Search for an icon...'
						fullWidth
					/>
				</Box>
			)}
		/>
	)
}
