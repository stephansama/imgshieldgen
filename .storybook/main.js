const { mergeConfig } = require('vite')
const { aliases } = require('../src/utilities')

module.exports = {
	stories: [
		'../src/**/*.story.@(mdx|js|jsx|ts|tsx)',
		'../src/**/*.stories.@(mdx|js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	core: { builder: '@storybook/builder-vite', disableTelemetry: true },
	features: { storyStoreV7: true },
	framework: '@storybook/react',
	async viteFinal(config, { configType }) {
		return mergeConfig(config, { resolve: { alias: aliases } })
	},
}
