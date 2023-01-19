import { createContext, useMemo } from 'react'
import { red } from '@mui/material/colors'
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from '@mui/material'

import useLocalStorage from '@hooks/useLocalStorage'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkmode, setDarkmode] = useLocalStorage(
		'darkmode',
		prefersDark ? 'dark' : 'light'
	)

	const toggleDarkmode = () =>
		setDarkmode((prev) => (prev === 'dark' ? 'light' : 'dark'))

	const isDark = darkmode === 'dark'

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkmode,
					primary: { main: red[700] },
				},
			}),
		[darkmode]
	)

	return (
		<GlobalContext.Provider value={{ isDark, toggleDarkmode, setDarkmode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}
