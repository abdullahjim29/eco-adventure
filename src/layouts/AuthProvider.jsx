import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // spy on user....
    

    const authInfo = {
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;