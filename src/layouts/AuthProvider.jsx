import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    // register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // log out user
    const logOutUser = () => {
        setLoading(true)
       return signOut(auth);
    }


    // spy on user....
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        user,
        setUser,
        logOutUser,
        loading,
        loginWithGoogle,
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;