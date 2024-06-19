import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageMetaData = ({ title }: { title: string }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{title} | Mercbot.io - Mercatorio Tools</title>
			</Helmet>
		</HelmetProvider>
	);
}

export default PageMetaData;
