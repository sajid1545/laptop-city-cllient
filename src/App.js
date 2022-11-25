import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { ReactComponent as MySVG } from "./logo.svg";
import ScrollToTop from "react-scroll-to-top";

function App() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<RouterProvider router={router} />
			<ScrollToTop smooth component={<MySVG />} />
			<Toaster position="top-center" reverseOrder={true} />
		</div>
	);
}

export default App;
