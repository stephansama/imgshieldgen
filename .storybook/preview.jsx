import GlobalProvider from '@/context'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
}

const withThemeProvider = (Story, context) => (
	<GlobalProvider>
		<Story />
	</GlobalProvider>
)

export const decorators = [withThemeProvider]
