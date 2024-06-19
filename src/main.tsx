import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const container = document.getElementById('root')
if (container) {
	createRoot(container).render(
		<StrictMode>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</StrictMode>
	)
} else {
	console.error('Root container missing in index.html')
}
