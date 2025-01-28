/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../Pages/hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';
//import useAxiosPublic from '../Pages/hooks/useAxiosPublic';
//import axios from 'axios';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const axiosPublic = useAxiosPublic();

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

    const userLogout = async () => {
        setLoading(true);
        await signOut(auth);
        setUser(null);
        setLoading(false);
    }

    const updateUserProfile = async (displayName, photoURL) => {
        setLoading(true);
        try {
          await updateProfile(auth.currentUser, { displayName, photoURL });
          toast.success("Profile updated successfully!");
        } catch (error) {
          console.error("Error updating profile:", error.message);
          toast.error(`Error: ${error.message}`);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() =>{
        const checkAdmin = async() =>{
            if(user?.email){
                setLoading(true);
            }
            try{
                const response = await axiosPublic.get('/adminUser', {
                    params: {email: user.email}
                })
                setIsAdmin(response.data.role === 'admin')
                console.log(isAdmin);
            }
            catch (error) {
                console.error("Error verifying admin status:", error);
              }
              finally {
                setLoading(false);
              }
        };
        checkAdmin();
    }, [user, axiosPublic, isAdmin])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            // if (currentUser) {
            //     const userInfo = {
            //         _id: currentUser.uid,
            //         email: currentUser.email,
            //         name: currentUser.displayName || "Anonymous User",
            //         photoURL: currentUser.photoURL || null,
            //     };
            //     setUser(userInfo)
            // }
            // else {
            //     setUser(null); // No user logged in
            // }

            if (currentUser?.email) {
                setUser(currentUser);
        
                const userInfo = { email: currentUser.email };
                await axiosPublic.post('/jwt', userInfo)
                  .then(res => {
                    if (res.data.token) {
                      localStorage.setItem('token', res.data.token);
                      setLoading(false);
                    }
                  })
        
        
              } else {
                localStorage.removeItem('token');
                setLoading(false);
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
        updateUserProfile,
        isAdmin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <ToastContainer/>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;