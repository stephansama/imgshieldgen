import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ResizableDrawer from '.'

import { siSimpleicons } from 'simple-icons'
import SimpleIcon from '../IconPicker/SimpleIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ResizableDrawer',
	component: ResizableDrawer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		anchor: { control: 'select', options: ['left', 'right'] },
		// backgroundColor: { control: 'color' },
	},
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
	const AnchorTest = () => (
		<Typography sx={{ display: 'flex', flexGrow: 1 }}>Test</Typography>
	)
	return (
		<Box sx={{ minWidth: '100vw', minHeight: '100vh', display: 'flex' }}>
			{args.anchor === 'right' && <AnchorTest />}
			<ResizableDrawer {...args}>
				<Box
					id='child'
					sx={{
						display: 'flex',
						// flexDirection: 'column',
						maxHeight: '100%',
						flexWrap: 'wrap',
						// alignContent: 'flex-start',
						// justifyContent: 'center',
					}}
				>
					{[...Array(50)].map((x, i) => (
						<SimpleIcon key={i} icon={siSimpleicons} />
					))}
				</Box>
			</ResizableDrawer>
			{args.anchor === 'left' && <AnchorTest />}
		</Box>
	)
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Left = Template.bind({})
Left.args = {
	anchor: 'left',
	minWidth: 50,
}

export const Right = Template.bind({})
Right.args = {
	anchor: 'right',
	minWidth: 50,
}

import { Tooltip } from '@mui/material'
import allSimpleIcons from 'simple-icons'

import useIcons from '@hooks/useIcons'
import SimpleIconLogo from '../IconPicker/SimpleIconLogo'
import Search from '../IconPicker/Search'

const SecondTemplate = (args) => {
	const [filterText, setFilterText] = useState('')
	const { shownIcons } = useIcons(allSimpleIcons, filterText)
	return (
		<Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
			<ResizableDrawer {...args}>
				<Box
					sx={{
						py: '10px',
						display: 'flex',
						borderBottom: '4px solid black',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<SimpleIconLogo />
					<Search value={filterText} setValue={setFilterText} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexGrow: 1,
						flexWrap: 'wrap',
						overflowY: 'scroll',
						overflowX: 'hidden',
						alignContent: 'flex-start',
						justifyContent: 'center',
					}}
				>
					{shownIcons.map((icon, i) => (
						<Tooltip key={i} title={icon.title}>
							<Box
								sx={{
									p: '5px',
									width: 'min-content',
									height: 'min-content',
									bgcolor: '#fff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<SimpleIcon icon={icon} colored />
							</Box>
						</Tooltip>
					))}
				</Box>
			</ResizableDrawer>
			<Typography>Test</Typography>
		</Box>
	)
}

export const TestIconPicker = SecondTemplate.bind({})
TestIconPicker.args = {
	anchor: 'left',
	minWidth: 250,
}
