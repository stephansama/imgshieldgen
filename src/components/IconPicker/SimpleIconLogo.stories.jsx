import React from 'react'
import SimpleIconLogo from './SimpleIconLogo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/IconPicker/SimpleIconLogo',
	component: SimpleIconLogo,
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
const Template = (args) => <SimpleIconLogo {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
	arg0: 'string',
	arg1: 'string',
}
