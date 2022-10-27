import React, {useEffect, useState} from "react";
import { getAuth } from 'firebase/auth';
import auth from "./firebase";
// import fire from "./firebase"
import 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isActive, setIsActive] = useState(localStorage.getItem("isActive") !== null ? localStorage.getItem("isActive"): "home");
    const [inactive,setInactive] =useState(true);
    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"))
    // const auth = getAuth(fire);

    useEffect(() => {
       auth.onAuthStateChanged(setCurrentUser);
    },[]);

    return(
        <AuthContext.Provider
        value={{
            currentUser,
            isActive,
            setIsActive,
            inactive,
            setInactive,
            isLogged,
            setIsLogged
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};