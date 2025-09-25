"use client";

import { COOKIE_NAME } from "@/config";
import { getCookieValue } from "@/utils/session";
import { getCookie } from "cookies-next";
import { useContext, useEffect, createContext, useState, ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../store/firebase";

export interface AuthType {
  email: string;
  id: string;
  image: string;
  name: string;
  phone: string;
}

export type AuthContextType = {
  user: any;
  googleSignIn: () => any;
  logOut: () => any;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const cookie = getCookie(COOKIE_NAME!);
  // const ck: AuthType = cookie ? getCookieValue() : {};
  const [user, setUser] = useState<any>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        return true;
      })
      .catch((error: any) => {
        return false;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Firebase currentUser:", currentUser);

      if (currentUser) {
        // Extract the data we need from Firebase user object
        const userData: AuthType = {
          id: currentUser.uid,
          email: currentUser.email || "",
          name: currentUser.displayName || "",
          image: currentUser.photoURL || "",
          phone: currentUser.phoneNumber || ""
        };

        setUser(userData);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

// Custom hook to use User Context
export const useUser = () => useContext(AuthContext);
