import { PageBreadcrumb2 } from '@/components'
import Towns from './components/Towns'

const Home = () => {
	return (
		<>
			<PageBreadcrumb2 title="Home" appName="Home" />
			<Towns />
		</>
	)
}

export default Home
