import React, { useState } from 'react'
import ColorPickerTooltip from '.'
import {
	Autocomplete,
	Button as MUIButton,
	TextField as MUITextField,
} from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ColorPickerTooltip',
	component: ColorPickerTooltip,
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
const Template = (args) => {
	const [color, setColor] = useState('#000')
	return (
		<>
			<ColorPickerTooltip {...args} {...{ color, setColor }} />
		</>
	)
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Button = Template.bind({})
Button.args = {
	children: (
		<MUIButton
			sx={{ width: 'fit-content', mx: 'auto' }}
			variant='contained'
			endIcon={<ColorLensIcon />}
		>
			Select Color
		</MUIButton>
	),
}

const SecondTemplate = (args) => {
	const [color, setColor] = useState('#000')
	const colorToHex = (color) => {
		const ctx = document.createElement('canvas').getContext('2d')
		ctx.fillStyle = color
		return ctx.fillStyle
	}
	const autocompleteOptions = ['yellow', 'black'].map((x) => ({
		label: x,
		value: colorToHex(x),
	}))
	return (
		<>
			<ColorPickerTooltip {...args} {...{ color, setColor }}>
				<MUITextField value={color} variant='filled' />
			</ColorPickerTooltip>
		</>
	)
}

export const TextField = SecondTemplate.bind({})
