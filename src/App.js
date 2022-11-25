import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { ReactComponent as MySVG } from "./logo.svg";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);

	return (
		<div className="max-w-[1440px] mx-auto">
			<RouterProvider router={router} />
			<ScrollToTop smooth component={<MySVG />} />
			<Toaster position="top-center" reverseOrder={true} />
		</div>
	);
}

export default App;
