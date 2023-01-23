import React from 'react'
import Search from './Search'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'IconPicker/Search',
	component: Search,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'fullscreen',
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Search {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop = Template.bind({})
Desktop.args = {
	arg0: 'string',
	arg1: 'string',
}

export const Mobile = Template.bind({})
Mobile.args = {
	arg0: 'string',
	arg1: 'string',
}
