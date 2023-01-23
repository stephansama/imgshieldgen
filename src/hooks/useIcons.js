import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import allSimpleIcons from 'simple-icons'

export default function useIcons(query) {
	const [shownIcons, setShownIcons] = useState([])
	const [iconNames, setIconNames] = useState([])
	const [maxIcons, setMaxIcons] = useState(175)

	const [lastIconRef, lastIconInView] = useInView({ threshold: 0 })

	const createSlugName = (slug) =>
		'si' + slug[0].toUpperCase() + slug.substring(1)

	const resetIcons = () =>
		setShownIcons(
			Object.values(allSimpleIcons).filter((x, i) => i <= maxIcons)
		)

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
						i <= maxIcons && allSimpleIcons[createSlugName(slug)]
				)
				.filter((x) => x)
		)

	const collectIconNames = () =>
		setIconNames(() =>
			Object.values(allSimpleIcons).map(({ title, slug }) => ({
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

	return {
		autoCompleteIconNames: iconNames.map(({ slug }) => ({
			label: slug,
			value: slug,
		})),
		lastIconRef,
		shownIcons,
	}
}
