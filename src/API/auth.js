const setAuthToken = (user) => {
	const currentUser = {
		name: user?.name,
		email: user?.email,
		role: user?.role,
	};

	fetch(`https://assignment-12-server-pi.vercel.app/users/${user?.email}`, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json',
			
		},
		body: JSON.stringify(currentUser),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			localStorage.setItem('laptop-city-token', data.token);
		});
};

export default setAuthToken;
