import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaultVal) {
	const [value, setValue] = useState(() => {
		const getDefault = () =>
			defaultVal instanceof Function ? defaultVal() : defaultVal

		const storedVal = localStorage.getItem(key)
		if (storedVal === 'undefined') return getDefault()

		const savedVal = JSON.parse(storedVal)
		return savedVal ? savedVal : getDefault()
	})

	useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value])

	return [value, setValue]
}
