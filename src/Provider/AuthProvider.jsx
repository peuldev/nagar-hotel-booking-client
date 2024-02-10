import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loding, setLoding] = useState([]);
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
    setLoding(true);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const Authinfo = {
    user,
    loding,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
