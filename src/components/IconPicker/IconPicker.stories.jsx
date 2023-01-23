import { Box } from '@mui/material'
import React from 'react'

import IconPicker from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'IconPicker/IconPicker',
	component: IconPicker,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
	<Box
		sx={{
			width: '100vw',
			display: 'flex',
			height: '100vh',
			overflowY: 'hidden',
		}}
	>
		<IconPicker {...args} />
	</Box>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	title: 'Image Shield Generator',
// }
