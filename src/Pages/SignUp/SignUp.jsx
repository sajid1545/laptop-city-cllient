import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import setAuthToken from '../../API/auth';
import { AuthContext } from '../../Contexts/AuthProvider';
import SmallSpinner from '../Shared/Spinners/SmallSpinner';
import './signUp.css';

const SignUp = () => {
	const [signupError, setSignupError] = useState('');
	const [load, setLoad] = useState(false);
	const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	// const location = useLocation();
	const navigate = useNavigate();

	const handleSignup = (data) => {
		setSignupError('');
		setLoad(true);
		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				toast.success('registered successfully');

				const userInfo = {
					name: data.name,
					email: user?.email,
					role: data?.userStatus,
				};

				updateUserProfile(data.name, data.photoUrl)
					.then(() => {
						setAuthToken(userInfo);
						navigate('/');
					})
					.catch((err) => {
						setSignupError(err.message);
					});
				setLoad(false);
			})
			.catch((err) => {
				setSignupError(err.message);
				setLoad(false);
			});
	};

	// sign up with google

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
				toast.success('Sign up success');
				// window.location.reload();
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="mt-5 signUp-form">
			<div className="w-full max-w-lg mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
				<h1 className="text-2xl font-bold text-center">Sign Up</h1>
				<form onSubmit={handleSubmit(handleSignup)} className="space-y-6 ">
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Name</label>
						<input
							type="text"
							{...register('name', { required: 'Name is required' })}
							placeholder="Name"
							className="w-full input-primary px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.name && <p className="text-red-600">{errors.name?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Photo URL</label>
						<input
							type="text"
							{...register('photoUrl', { required: 'Name is required' })}
							placeholder="Photo URL"
							className="w-full input-primary px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.photoUrl && <p className="text-red-600">{errors.photoUrl?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<select
							{...register('userStatus')}
							className="select select-primary w-full px-4  rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400 space-y-4">
							<option  value={'buyer'}>Buyer</option>
							<option>Seller</option>
						</select>
					</div>
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Email</label>
						<input
							type="email"
							{...register('email', { required: 'Email Address is required' })}
							placeholder="Email"
							className="w-full input-primary px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label className="block text-gray-400">Password</label>
						<input
							type="password"
							{...register('password', { required: 'Password  is required' })}
							placeholder="Password"
							className="w-full input-primary px-4 py-3 rounded-md border-gray-700 border-2 bg-gray-900 text-gray-100 focus:border-violet-400"
						/>
						{errors.password && <p className="text-red-600">{errors.password?.message}</p>}
					</div>

					{load ? (
						<SmallSpinner />
					) : (
						<button className="block w-full p-3 text-center rounded-sm text-white duration-500 btn-primary">
							Sign up
						</button>
					)}
				</form>
				<p className="text-red-700 font-bold text-center">{signupError}</p>
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
					Already have an account?
					<Link to={`/login`} className="underline dark:text-gray-100">
						Log In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
