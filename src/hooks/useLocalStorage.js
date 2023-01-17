import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaultVal) {
	const [value, setValue] = useState(() => {
		const savedVal = JSON.parse(localStorage.getItem(key))
		return savedVal
			? savedVal
			: defaultVal instanceof Function
			? defaultVal()
			: defaultVal
	})

	useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value])

	return [value, setValue]
}
