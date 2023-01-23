import { createContext, useState } from 'react'

import { Box } from '@mui/material'

import ResizableDrawer from '../ResizableDrawer'

import IconArea from './IconArea'
import Search from './Search'
import SimpleIconLogo from './SimpleIconLogo'

import useIcons from '@hooks/useIcons'

export const IconPickerContext = createContext({})

export default function IconPicker() {
	const [iconFilter, setIconFilter] = useState('')
	const { shownIcons, autoCompleteIconNames } = useIcons(iconFilter)

	return (
		<IconPickerContext.Provider
			value={{ iconFilter, setIconFilter, shownIcons, autoCompleteIconNames }}
		>
			<ResizableDrawer anchor='left' minWidth='250'>
				<Box
					sx={{
						py: '10px',
						display: 'flex',
						borderBottom: '4px solid black',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<SimpleIconLogo />
					<Search />
				</Box>
				<IconArea />
			</ResizableDrawer>
		</IconPickerContext.Provider>
	)
}
