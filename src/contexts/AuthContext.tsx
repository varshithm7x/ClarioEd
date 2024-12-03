import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface UserData {
  email: string | null;
  userType: 'student' | 'tutor';
  name: string;
  createdAt: string;
  [key: string]: any;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: Partial<UserData>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signUp = async (email: string, password: string, userData: Partial<UserData>) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        userType: userData.userType,
        name: userData.name,
        createdAt: new Date().toISOString(),
        ...userData
      });

      if (userData.userType === 'student') {
        navigate('/dashboard/student');
      } else if (userData.userType === 'tutor') {
        navigate('/dashboard/tutor');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const userData = userDoc.data() as UserData;

      if (userData.userType === 'student') {
        navigate('/dashboard/student');
      } else if (userData.userType === 'tutor') {
        navigate('/dashboard/tutor');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const handleSocialSignIn = async (user: User, provider: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          name: user.displayName,
          createdAt: new Date().toISOString(),
          userType: 'student' // default type
        });
        navigate('/dashboard/student');
      } else {
        const userData = userDoc.data() as UserData;
        if (userData.userType === 'student') {
          navigate('/dashboard/student');
        } else if (userData.userType === 'tutor') {
          navigate('/dashboard/tutor');
        }
      }
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleSocialSignIn(result.user, 'Google');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleSocialSignIn(result.user, 'Github');
    } catch (error) {
      console.error('Error signing in with Github:', error);
      throw error;
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleSocialSignIn(result.user, 'Facebook');
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setCurrentUser(user);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 