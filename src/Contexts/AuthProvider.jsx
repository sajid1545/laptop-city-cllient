import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import app from './../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const googleProvider = new GoogleAuthProvider();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photo) => {
		setLoading(true);

		const profile = {
			displayName: name,
			photoURL: photo,
		};

		return updateProfile(auth.currentUser, profile);
	};

	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = { user, loading, setLoading, createUser, updateUserProfile, signIn,googleSignIn };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
