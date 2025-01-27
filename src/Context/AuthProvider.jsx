/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';
//import useAxiosPublic from '../Pages/hooks/useAxiosPublic';
//import axios from 'axios';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userInfo = {
                    _id: currentUser.uid,
                    email: currentUser.email,
                    name: currentUser.displayName || "Anonymous User",
                    photoURL: currentUser.photoURL || null,
                };
                setUser(userInfo)
            }
            else {
                setUser(null); // No user logged in
            }
            setLoading(false); // Stop loading



            // if(currentUser?.email){
            //     const user = {email: currentUser.email};

            //     axiosPublic.post('/jwt', user, {withCredentials: true})
            //     .then(res => {
            //         console.log('logout', res.data);
            //         setLoading(false);
            //     })
            // }
            // else{
            //     axiosPublic.post('/logout', {}, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log('logout', res.data);
            //         setLoading(false);
            //     })
            // }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        googleLogin,
        signIn,
        userLogout,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <p>Loading...</p>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;