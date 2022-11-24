import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Home from './../../Pages/Home/Home/Home';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import CategorizedProducts from './../../Pages/Home/Categories/CategorizedProducts';

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
				path: '/category/:id',
				element: (
					<PrivateRoute>
						<CategorizedProducts />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:5000/products/category/${params.id}`),
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
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/dashboard/addProducts',
				element: <AddProducts />,
			},
		],
	},
]);
