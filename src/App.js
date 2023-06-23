import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { AuthContext } from './Contexts/AuthProvider';
import { router } from './Routes/Routes/Routes';

function App() {
	const { theme } = useContext(AuthContext);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div data-theme={theme ? 'night' : 'light'} className="mx-auto">
			<RouterProvider router={router} />
			<ScrollToTop
				smooth
				component={
					<p>
						<AiOutlineArrowUp className="mx-auto text-black" fontSize={30} />
					</p>
				}
			/>
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
