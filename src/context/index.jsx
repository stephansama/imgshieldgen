import { createContext, useMemo, useState } from 'react'
import { red } from '@mui/material/colors'
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from '@mui/material'

import useLocalStorage from '@hooks/useLocalStorage'

import styles from './global.module.css'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkmode, setDarkmode] = useLocalStorage(
		'darkmode',
		prefersDark ? 'dark' : 'light'
	)
	const isDark = darkmode === 'dark'

	const toggleDarkmode = () =>
		setDarkmode((prev) => (prev === 'dark' ? 'light' : 'dark'))

	const [previewHeight, setPreviewHeight] = useState(20)

	const badgeStyleOptions = [
		'for-the-badge',
		'flat',
		'flat-square',
		'plastic',
		'social',
	]

	const [badgeOptions, setBadgeOptions] = useState({
		label: '',
		message: '',
		labelColor: '',
		logo: '',
		logoColor: '',
		logoWidth: '',
		color: '#fff',
		style: badgeStyleOptions[0],
	})

	const updateBadgeOption = (key, val) =>
		setBadgeOptions((prev) => ({ ...prev, [key]: val }))

	const selectIcon = (icon) => () => updateBadgeOption('logo', icon)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkmode,
					primary: { main: red[700] },
				},
				GlobalStyles: { ...styles },
			}),
		[darkmode]
	)

	return (
		<GlobalContext.Provider
			value={{
				isDark,
				toggleDarkmode,
				setDarkmode,
				selectIcon,
				badgeStyleOptions,
				badgeOptions,
				updateBadgeOption,
				previewHeight,
				setPreviewHeight,
			}}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}
