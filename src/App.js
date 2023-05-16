import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { ReactComponent as MySVG } from './logo.svg';
import ScrollToTop from 'react-scroll-to-top';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Contexts/AuthProvider';

function App() {
	const { theme } = useContext(AuthContext);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div data-theme={theme ? 'night' : 'light'} className="mx-auto">
			<RouterProvider router={router} />
			<ScrollToTop smooth component={<MySVG />} />
			<Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					className: '',
					duration: 2500,
					style: {
						background: '#000000',
						color: '#fff',
					},
				}}
			/>
		</div>
	);
}

export default App;
