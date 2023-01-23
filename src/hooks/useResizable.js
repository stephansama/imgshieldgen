import { useCallback, useState } from 'react'

export default function useResizable(anchor, minWidth) {
	const [resizeWidth, setResizeWidth] = useState(minWidth)
	const handleResize = useCallback(({ x, clientX }) => {
		const newWidth =
			anchor === 'left'
				? x
				: document.body.offsetLeft + document.body.offsetWidth - clientX
		if (newWidth >= minWidth && newWidth <= minWidth * 3)
			setResizeWidth(newWidth)
	}, [])

	return {
		resizeWidth,
		handleResize,
	}
}
