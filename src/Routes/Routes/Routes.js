import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Home from './../../Pages/Home/Home/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
		],
	},

	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
]);
