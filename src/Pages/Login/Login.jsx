import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import setAuthToken from '../../API/auth';
import SmallSpinner from '../Shared/Spinners/SmallSpinner';
import './login.css';
import { Helmet } from 'react-helmet-async';

const Login = () => {
	const { signIn, googleSignIn } = useContext(AuthContext);
	const [loginError, setLoginError] = useState('');
	const [load, setLoad] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const location = useLocation();
	const navigate = useNavigate();
	let from = location.state?.from?.pathname || '/';

	const handleLogin = (data) => {
		setLoginError('');
		console.log(data);
		setLoad(true);
		signIn(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				const userInfo = {
					name: user?.displayName,
					email: user?.email,
				};
				setAuthToken(userInfo);
				toast.success('Login Successful');
				navigate(from, { replace: true });
				setLoad(false);
			})
			.catch((err) => {
				setLoginError(err.message);
				setLoad(false);
			});
	};

	// login with google

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				const userInfo = {
					name: user?.displayName,
					email: user?.email,
					role: 'buyer',
				};
				setAuthToken(userInfo);
				toast.success('login success');
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// if (load) {
	// 	return <SmallSpinner />;
	// }

	return (
		<div className="flex items-center justify-center h-screen login-form">
			<Helmet>
				<title> Login - Laptop City </title>
			</Helmet>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ">
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Email</label>
						<input
							type="email"
							{...register('email', { required: 'Email Address is required' })}
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Password</label>
						<input
							type="password"
							{...register('password', { required: 'Password  is required' })}
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.password && <p className="text-red-600">{errors.password?.message}</p>}
					</div>

					{load ? (
						<SmallSpinner />
					) : (
						<button className="block w-full p-3 text-center rounded-sm text-white duration-500 btn-primary">
							Sign in
						</button>
					)}
				</form>
				<p className="text-red-700 font-bold text-center">{loginError}</p>

				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button
						onClick={handleGoogleSignIn}
						className="p-3 rounded-sm hover:text-blue-600 duration-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current">
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Don't have an account?
					<Link to={`/signup`} className="underline dark:text-gray-100">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
