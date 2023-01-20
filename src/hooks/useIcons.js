import { useEffect, useState } from 'react'

export default function useIcons(allIcons, query, maxIcons = 175) {
	const [shownIcons, setShownIcons] = useState([])
	const [iconNames, setIconNames] = useState([])

	const createSlugName = (slug) =>
		'si' + slug[0].toUpperCase() + slug.substring(1)

	const resetIcons = () =>
		setShownIcons(Object.values(allIcons).filter((x, i) => i <= maxIcons))

	const filterIcons = () =>
		setShownIcons(() =>
			iconNames
				.filter(({ title, slug }) => {
					const lowerQuery = query.toLowerCase()
					return (
						title.includes(lowerQuery) || slug.includes(lowerQuery)
					)
				})
				.map(
					({ slug }, i) =>
						i < maxIcons && allIcons[createSlugName(slug)]
				)
		)

	const collectIconNames = () =>
		setIconNames(() =>
			Object.values(allIcons).map(({ title, slug }) => ({
				slug,
				title: title.toLowerCase(),
			}))
		)

	useEffect(() => {
		if (!query) return resetIcons()
		const debounce = setTimeout(() => filterIcons(), 500)
		return () => clearTimeout(debounce)
	}, [query])

	useEffect(() => {
		collectIconNames()
		resetIcons()
	}, [])

	return { shownIcons }
}
