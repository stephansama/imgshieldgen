import { useCallback, useState } from 'react'

export default function useDrag(anchor, minWidth) {
	const [drawerWidth, setDrawerWidth] = useState(minWidth)
	const handleDrag = useCallback(({ x, clientX }) => {
		const newWidth =
			anchor === 'left' ? x : document.body.offsetWidth - clientX
		if (newWidth >= minWidth && newWidth <= minWidth * 3)
			setDrawerWidth(newWidth)
	}, [])

	return {
		drawerWidth,
		handleDrag,
	}
}
