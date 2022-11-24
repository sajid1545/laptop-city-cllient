import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Home from './../../Pages/Home/Home/Home';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import CategorizedProducts from './../../Pages/Home/Categories/CategorizedProducts';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import SellerRoute from '../SellerRoute/SellerRoute';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';

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
				path: '/dashboard/myOrders',
				element: <MyOrders />,
			},
			{
				path: '/dashboard/payment/:id',
				element: <Payment />,
				loader: ({ params }) => fetch(`http://localhost:5000/book-product/${params.id}`),
			},
			{
				path: '/dashboard/addProducts',
				element: (
					<SellerRoute>
						<AddProducts />
					</SellerRoute>
				),
			},
			{
				path: '/dashboard/myProducts',
				element: (
					<SellerRoute>
						<MyProducts />
					</SellerRoute>
				),
			},
		],
	},
]);
