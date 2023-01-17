import * as React from 'react'
import { createRoot } from 'react-dom/client'

import GlobalProvider from './context'
import App from './app'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</React.StrictMode>
)
