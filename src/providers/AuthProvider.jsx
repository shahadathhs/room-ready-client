import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup 
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

// direct login auth provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })   
  }

  // loginUser
  const login =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

   // google login
   const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser?.email)
      setUser(currentUser);
      setLoading(false);

      // if user exist then issue a token
      const userEmail = { email: currentUser?.email || user?.email }
      if (currentUser) {
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userEmail, {
          withCredentials: true
        })
          .then(res => {
            console.log(res.data)
          })
      }else{
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, userEmail, {
          withCredentials: true
        })
          .then(res => {
            console.log(res.data)
          })
      }
    });
    return () => {
      unSubscribe();
    }
  }, [user])

  const authInfo = {
    user, setUser, loading, 
    createUser, updateUserProfile,
    googleLogin,
    login, logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
}