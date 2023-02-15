import Layout from '../components/Layout';
import '../styles/globals.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50,
		});
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
