import { Box } from '@mui/material'
import React from 'react'
import Preview from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Preview',
	component: Preview,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		grid: { type: 'boolean' },
		color: { control: 'color' },
	},
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
	<Box sx={{ minWidth: '100vw', minHeight: '100vh', display: 'flex' }}>
		<Preview {...args}>
			<img
				src='https://api.netlify.com/api/v1/badges/a0210912-a859-4ea1-960c-9638b5fe0776/deploy-status'
				alt='netlify'
			/>
		</Preview>
	</Box>
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Grid = Template.bind({})
Grid.args = {
	grid: true,
}

export const NoGrid = Template.bind({})
NoGrid.args = {}

export const ChangeColor = Template.bind({})
ChangeColor.args = {
	color: '#29713E',
}
