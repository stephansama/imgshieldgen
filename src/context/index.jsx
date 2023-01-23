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

	const [selectedIcon, setSelectedIcon] = useState(null)
	// const [badgeURL, setBadgeURL] = useState(null)

	const selectIcon = (icon) => () =>
		setSelectedIcon(() => {
			console.log(icon)
			return icon
		})

	const badgeURL = useMemo(() => {
		return ``
	}, [selectedIcon])

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
			value={{ isDark, toggleDarkmode, setDarkmode, selectIcon }}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}
