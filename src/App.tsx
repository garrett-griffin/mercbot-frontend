import AllRoutes from './routes/Routes'
import { AuthProvider, ThemeProvider, AccountProvider } from './context'
import { Toaster } from 'sonner'
import '@/assets/scss/app-dark.scss'
import '@/assets/scss/icons.scss'

function App() {

	return (
		<>
			<ThemeProvider>
				<AuthProvider>
					<AccountProvider>
						<AllRoutes />
						<Toaster richColors />
					</AccountProvider>
				</AuthProvider>
			</ThemeProvider>
		</>
	)
}

export default App
