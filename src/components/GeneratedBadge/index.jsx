import React, { useContext, useState } from 'react'
import { GlobalContext } from '@/context'
import { useTheme } from '@mui/material'
import { useEffect } from 'react'

function createShieldURL(
	options,
	replacerFunc = (x) => x.replace('', ''),
	baseURL = 'https://img.shields.io/static/v1'
) {
	const removeUnwanted = (x) => x.replace(` `, `+`).replace('#', '')
	baseURL = replacerFunc(baseURL)
	return (
		baseURL +
		Object.entries(options)
		.map(
			([key, value], i) =>
				`${i === 0 ? '?' : '&'}${key}=${removeUnwanted(value)}`
		).join``
	)
}

export default function GeneratedBadge() {
	const { badgeOptions, previewHeight } = useContext(GlobalContext)
	const { GlobalStyles } = useTheme()
	const [badgeURL, setBadgeURL] = useState('')

	useEffect(() => {
		const debounce = setTimeout(() => {
			setBadgeURL(createShieldURL(badgeOptions))
		}, 1000)
		return () => clearTimeout(debounce)
	}, [badgeOptions])

	return (
		<img
			src={badgeURL}
			height={previewHeight}
			alt='generated badge from image shield generator'
			className={GlobalStyles[`no-select`]}
		/>
	)
}
