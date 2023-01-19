import { useContext, useEffect } from 'react'
import GlobalProvider, { GlobalContext } from '@/context'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
}

const withThemeProvider = (Story, context) => {
	const GlobalUser = ({
		children,
		context: {
			globals: { darkmode },
		},
	}) => {
		const { setDarkmode } = useContext(GlobalContext)
		useEffect(() => setDarkmode(darkmode), [darkmode])
		return children
	}
	return (
		<GlobalProvider>
			<GlobalUser context={context}>
				<Story />
			</GlobalUser>
		</GlobalProvider>
	)
}

export const globalTypes = {
	darkmode: {
		toolbar: {
			icon: 'circlehollow',
			description: 'Customize theme mode',
			dynamicTitle: true,
			items: [
				{ value: 'light', title: 'Light Mode', left: '☀️' },
				{ value: 'dark', title: 'Dark Mode', left: '🌕' },
			],
		},
	},
}

export const decorators = [withThemeProvider]
